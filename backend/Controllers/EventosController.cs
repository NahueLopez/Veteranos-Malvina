using MalvinasApi.Data;
using MalvinasApi.Models;

namespace MalvinasApi.Controllers;

public class EventosController : CrudControllerBase<Evento>
{
    public EventosController(AppDbContext db) : base(db) { }
    protected override int GetId(Evento e) => e.Id;
    protected override void SetId(Evento e, int id) => e.Id = id;
    protected override IQueryable<Evento> Query() => Set.OrderBy(e => e.FechaEvento);
}
