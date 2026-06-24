using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MalvinasApi.Data;

namespace MalvinasApi.Controllers;

/// <summary>
/// CRUD genérico. Lectura pública (sitio público), escritura protegida (backoffice).
/// </summary>
[ApiController]
[Route("api/[controller]")]
public abstract class CrudControllerBase<T> : ControllerBase where T : class
{
    protected readonly AppDbContext Db;
    protected CrudControllerBase(AppDbContext db) => Db = db;

    protected DbSet<T> Set => Db.Set<T>();
    protected abstract int GetId(T entity);
    protected abstract void SetId(T entity, int id);

    /// <summary>Orden por defecto para los listados (override opcional).</summary>
    protected virtual IQueryable<T> Query() => Set.AsQueryable();

    [HttpGet]
    [AllowAnonymous]
    public async Task<ActionResult<IEnumerable<T>>> GetAll()
        => Ok(await Query().ToListAsync());

    [HttpGet("{id:int}")]
    [AllowAnonymous]
    public async Task<ActionResult<T>> GetById(int id)
    {
        var entity = await Set.FindAsync(id);
        return entity is null ? NotFound() : Ok(entity);
    }

    [HttpPost]
    [Authorize]
    public async Task<ActionResult<T>> Create(T entity)
    {
        SetId(entity, 0);
        Set.Add(entity);
        await Db.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = GetId(entity) }, entity);
    }

    [HttpPut("{id:int}")]
    [Authorize]
    public async Task<IActionResult> Update(int id, T entity)
    {
        var existente = await Set.FindAsync(id);
        if (existente is null) return NotFound();

        SetId(entity, id);
        Db.Entry(existente).CurrentValues.SetValues(entity);
        await Db.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id:int}")]
    [Authorize]
    public async Task<IActionResult> Delete(int id)
    {
        var existente = await Set.FindAsync(id);
        if (existente is null) return NotFound();

        Set.Remove(existente);
        await Db.SaveChangesAsync();
        return NoContent();
    }
}
