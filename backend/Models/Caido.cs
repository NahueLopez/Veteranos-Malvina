namespace MalvinasApi.Models;

/// <summary>Héroe caído en combate. Memorial del Centro.</summary>
public class Caido
{
    public int Id { get; set; }
    public string Nombre { get; set; } = string.Empty;
    public string Apellido { get; set; } = string.Empty;
    public int? Edad { get; set; }
    public string? Unidad { get; set; }
    public string? Arma { get; set; } // Ejército | Armada | Fuerza Aérea
    public string? Lugar { get; set; } // lugar donde cayó
    public DateOnly? FechaCaida { get; set; }
    public string? Homenaje { get; set; }
    public string? FotoUrl { get; set; }
    public bool Publicado { get; set; } = true;
}
