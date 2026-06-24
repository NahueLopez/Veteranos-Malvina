using MalvinasApi.Data;
using MalvinasApi.Models;

namespace MalvinasApi.Controllers;

public class DonacionesController : CrudControllerBase<Donacion>
{
    public DonacionesController(AppDbContext db) : base(db) { }
    protected override int GetId(Donacion e) => e.Id;
    protected override void SetId(Donacion e, int id) => e.Id = id;
    protected override IQueryable<Donacion> Query() => Set.OrderByDescending(d => d.Fecha);
}
