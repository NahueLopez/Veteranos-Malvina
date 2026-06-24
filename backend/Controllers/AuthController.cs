using Microsoft.AspNetCore.Mvc;
using MalvinasApi.Data;
using MalvinasApi.DTOs;
using MalvinasApi.Services;

namespace MalvinasApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _db;
    private readonly TokenService _tokens;

    public AuthController(AppDbContext db, TokenService tokens)
    {
        _db = db;
        _tokens = tokens;
    }

    [HttpPost("login")]
    public ActionResult<LoginResponse> Login(LoginRequest req)
    {
        var usuario = _db.Usuarios.FirstOrDefault(u => u.Email == req.Email);
        if (usuario is null || !BCrypt.Net.BCrypt.Verify(req.Password, usuario.PasswordHash))
            return Unauthorized(new { mensaje = "Credenciales inválidas." });

        var token = _tokens.GenerarToken(usuario);
        return Ok(new LoginResponse(token, usuario.Email, usuario.Nombre));
    }
}
