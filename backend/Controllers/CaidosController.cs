using MalvinasApi.Data;
using MalvinasApi.Models;

namespace MalvinasApi.Controllers;

public class CaidosController : CrudControllerBase<Caido>
{
    public CaidosController(AppDbContext db) : base(db) { }
    protected override int GetId(Caido e) => e.Id;
    protected override void SetId(Caido e, int id) => e.Id = id;
    protected override IQueryable<Caido> Query() => Set.OrderBy(c => c.Apellido);
}
