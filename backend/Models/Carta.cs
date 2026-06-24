namespace MalvinasApi.Models;

/// <summary>Carta desde el frente. Correspondencia de soldados durante la guerra.</summary>
public class Carta
{
    public int Id { get; set; }
    public string Autor { get; set; } = string.Empty;
    public string? Destinatario { get; set; }
    public DateOnly? Fecha { get; set; }
    public string? Contenido { get; set; }
    public string? Contexto { get; set; }
    public bool Publicado { get; set; }
}
