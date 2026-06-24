using Microsoft.EntityFrameworkCore;
using MalvinasApi.Models;

namespace MalvinasApi.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Veterano> Veteranos => Set<Veterano>();
    public DbSet<EventoHistorico> EventosHistoricos => Set<EventoHistorico>();
    public DbSet<Noticia> Noticias => Set<Noticia>();
    public DbSet<Evento> Eventos => Set<Evento>();
    public DbSet<GaleriaImagen> Galeria => Set<GaleriaImagen>();
    public DbSet<Caido> Caidos => Set<Caido>();
    public DbSet<Documento> Documentos => Set<Documento>();
    public DbSet<Homenaje> Homenajes => Set<Homenaje>();
    public DbSet<Carta> Cartas => Set<Carta>();
    public DbSet<Donacion> Donaciones => Set<Donacion>();
    public DbSet<Usuario> Usuarios => Set<Usuario>();

    protected override void OnModelCreating(ModelBuilder mb)
    {
        base.OnModelCreating(mb);

        mb.Entity<Usuario>().HasIndex(u => u.Email).IsUnique();
        // El usuario admin se siembra en runtime (DbInitializer) con un hash BCrypt real.

        mb.Entity<EventoHistorico>().HasData(
            new EventoHistorico { Id = 1, Fecha = "2 Abr 1982", Titulo = "Operación Rosario — El desembarco", Descripcion = "Fuerzas argentinas recuperan las Islas Malvinas.", Tag = "Operación Rosario", TipoTag = "info", Orden = 1 },
            new EventoHistorico { Id = 2, Fecha = "1 May 1982", Titulo = "Comienza la batalla aérea", Descripcion = "Inicio de los bombardeos sobre Puerto Argentino.", Tag = "Combate aéreo", TipoTag = "info", Orden = 2 },
            new EventoHistorico { Id = 3, Fecha = "2 May 1982", Titulo = "Hundimiento del Crucero General Belgrano", Descripcion = "323 tripulantes pierden la vida.", Tag = "323 vidas perdidas", TipoTag = "danger", Orden = 3 },
            new EventoHistorico { Id = 4, Fecha = "28 May 1982", Titulo = "Batalla de Goose Green", Descripcion = "Duro combate terrestre.", Tag = "Combate terrestre", TipoTag = "info", Orden = 4 },
            new EventoHistorico { Id = 5, Fecha = "14 Jun 1982", Titulo = "El regreso", Descripcion = "Cese del fuego tras 74 días.", Tag = "Cese del fuego", TipoTag = "info", Orden = 5 }
        );
    }
}
