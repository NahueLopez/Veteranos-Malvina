namespace MalvinasApi.Models;

public class Evento
{
    public int Id { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string? Descripcion { get; set; }
    public DateOnly FechaEvento { get; set; }
    public string? Hora { get; set; }
    public string? Lugar { get; set; }
    public bool Publicado { get; set; }
}
