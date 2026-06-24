namespace MalvinasApi.Models;

/// <summary>Aporte o donación recibida por el Centro de Veteranos.</summary>
public class Donacion
{
    public int Id { get; set; }
    public string Donante { get; set; } = string.Empty;
    public string Tipo { get; set; } = "Económica"; // Económica | Materiales | Servicios | Otro
    public decimal? Monto { get; set; }
    public string? Detalle { get; set; }
    public DateOnly? Fecha { get; set; }
    public bool Anonimo { get; set; }
}
