namespace MalvinasApi.Models;

/// <summary>Hito de la línea de tiempo interactiva de la guerra.</summary>
public class EventoHistorico
{
    public int Id { get; set; }
    public string Fecha { get; set; } = string.Empty; // texto, ej. "2 Abr 1982"
    public string Titulo { get; set; } = string.Empty;
    public string? Descripcion { get; set; }
    public string? ImagenUrl { get; set; }
    public string? Tag { get; set; }
    public string TipoTag { get; set; } = "info"; // info | danger
    public int Orden { get; set; }
}
