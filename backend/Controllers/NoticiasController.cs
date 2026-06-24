using MalvinasApi.Data;
using MalvinasApi.Models;

namespace MalvinasApi.Controllers;

public class NoticiasController : CrudControllerBase<Noticia>
{
    public NoticiasController(AppDbContext db) : base(db) { }
    protected override int GetId(Noticia e) => e.Id;
    protected override void SetId(Noticia e, int id) => e.Id = id;
    protected override IQueryable<Noticia> Query() => Set.OrderByDescending(n => n.FechaPublicacion);
}
