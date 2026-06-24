using MalvinasApi.Data;
using MalvinasApi.Models;

namespace MalvinasApi.Controllers;

public class CartasController : CrudControllerBase<Carta>
{
    public CartasController(AppDbContext db) : base(db) { }
    protected override int GetId(Carta e) => e.Id;
    protected override void SetId(Carta e, int id) => e.Id = id;
    protected override IQueryable<Carta> Query() => Set.OrderByDescending(c => c.Fecha);
}
