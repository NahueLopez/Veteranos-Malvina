using MalvinasApi.Data;
using MalvinasApi.Models;

namespace MalvinasApi.Controllers;

public class GaleriaController : CrudControllerBase<GaleriaImagen>
{
    public GaleriaController(AppDbContext db) : base(db) { }
    protected override int GetId(GaleriaImagen e) => e.Id;
    protected override void SetId(GaleriaImagen e, int id) => e.Id = id;
    protected override IQueryable<GaleriaImagen> Query() => Set.OrderByDescending(g => g.Fecha);
}
