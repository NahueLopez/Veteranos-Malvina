namespace MalvinasApi.Models;

public class Veterano
{
    public int Id { get; set; }
    public string Nombre { get; set; } = string.Empty;
    public string Apellido { get; set; } = string.Empty;
    public string? Unidad { get; set; }
    public string? Arma { get; set; } // Ejército | Armada | Fuerza Aérea
    public string? TestimonioCorto { get; set; }
    public string? TestimonioCompleto { get; set; }
    public string? FotoUrl { get; set; }
    public DateOnly? FechaNacimiento { get; set; }
    public bool Activo { get; set; } = true;
}
