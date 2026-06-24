using MalvinasApi.Data;
using MalvinasApi.Models;

namespace MalvinasApi.Controllers;

public class HomenajesController : CrudControllerBase<Homenaje>
{
    public HomenajesController(AppDbContext db) : base(db) { }
    protected override int GetId(Homenaje e) => e.Id;
    protected override void SetId(Homenaje e, int id) => e.Id = id;
    protected override IQueryable<Homenaje> Query() => Set.OrderBy(h => h.Nombre);
}
