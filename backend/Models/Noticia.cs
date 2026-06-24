namespace MalvinasApi.Models;

public class Noticia
{
    public int Id { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string? Resumen { get; set; }
    public string? Cuerpo { get; set; }
    public DateOnly FechaPublicacion { get; set; }
    public string Tipo { get; set; } = "Noticia"; // Noticia | Evento
    public string? ImagenUrl { get; set; }
    public bool Publicado { get; set; }
}
