namespace MalvinasApi.Models;

/// <summary>Documento del archivo histórico (parte de guerra, informe, mapa, etc.).</summary>
public class Documento
{
    public int Id { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string? Descripcion { get; set; }
    public string Tipo { get; set; } = "Parte de guerra"; // Parte de guerra | Informe | Mapa | Carta | Otro
    public string? Url { get; set; }
    public DateOnly? Fecha { get; set; }
    public bool Publicado { get; set; }
}
