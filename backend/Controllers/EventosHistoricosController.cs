using MalvinasApi.Data;
using MalvinasApi.Models;

namespace MalvinasApi.Controllers;

public class EventosHistoricosController : CrudControllerBase<EventoHistorico>
{
    public EventosHistoricosController(AppDbContext db) : base(db) { }
    protected override int GetId(EventoHistorico e) => e.Id;
    protected override void SetId(EventoHistorico e, int id) => e.Id = id;
    protected override IQueryable<EventoHistorico> Query() => Set.OrderBy(e => e.Orden);
}
