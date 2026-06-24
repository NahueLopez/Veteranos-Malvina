namespace MalvinasApi.Models;

public class GaleriaImagen
{
    public int Id { get; set; }
    public string Url { get; set; } = string.Empty;
    public string? Descripcion { get; set; }
    public DateOnly? Fecha { get; set; }
    public string? Categoria { get; set; }
}
