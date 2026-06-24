namespace MalvinasApi.Models;

/// <summary>Monumento, placa o acto de homenaje a los veteranos y caídos.</summary>
public class Homenaje
{
    public int Id { get; set; }
    public string Nombre { get; set; } = string.Empty;
    public string? Ubicacion { get; set; }
    public string? Descripcion { get; set; }
    public string Tipo { get; set; } = "Monumento"; // Monumento | Placa | Plaza | Mural | Otro
    public string? ImagenUrl { get; set; }
    public bool Publicado { get; set; }
}
