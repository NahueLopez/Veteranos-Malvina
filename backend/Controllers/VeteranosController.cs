using MalvinasApi.Data;
using MalvinasApi.Models;

namespace MalvinasApi.Controllers;

public class VeteranosController : CrudControllerBase<Veterano>
{
    public VeteranosController(AppDbContext db) : base(db) { }
    protected override int GetId(Veterano e) => e.Id;
    protected override void SetId(Veterano e, int id) => e.Id = id;
    protected override IQueryable<Veterano> Query() => Set.OrderBy(v => v.Apellido);
}
