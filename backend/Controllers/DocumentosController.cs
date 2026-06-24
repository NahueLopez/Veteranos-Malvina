using MalvinasApi.Data;
using MalvinasApi.Models;

namespace MalvinasApi.Controllers;

public class DocumentosController : CrudControllerBase<Documento>
{
    public DocumentosController(AppDbContext db) : base(db) { }
    protected override int GetId(Documento e) => e.Id;
    protected override void SetId(Documento e, int id) => e.Id = id;
    protected override IQueryable<Documento> Query() => Set.OrderByDescending(d => d.Fecha);
}
