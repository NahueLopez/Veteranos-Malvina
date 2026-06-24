using MalvinasApi.Models;

namespace MalvinasApi.Data;

public static class DbInitializer
{
    /// <summary>Siembra el usuario admin si no existe ninguno.</summary>
    public static void SeedAdmin(AppDbContext db, IConfiguration config)
    {
        if (db.Usuarios.Any()) return;

        var email = config["Admin:Email"] ?? "admin@centroveteranos.org";
        var password = config["Admin:Password"] ?? "malvinas2982";

        db.Usuarios.Add(new Usuario
        {
            Email = email,
            Nombre = "Administrador",
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(password)
        });
        db.SaveChanges();
    }
}
