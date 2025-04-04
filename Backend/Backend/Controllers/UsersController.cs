using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _context;

    public UsersController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        return await _context.tb_user.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<User>> PostUser(User user)
    {
        _context.tb_user.Add(user);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, user);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutUser(int id, User updatedUser)
    {
        var existingUser = await _context.tb_user.FindAsync(id);
        if (existingUser == null)
            return NotFound();

        existingUser.Nome = updatedUser.Nome;
        existingUser.Idade = updatedUser.Idade;
        existingUser.EstadoCivil = updatedUser.EstadoCivil;
        existingUser.CPF = updatedUser.CPF;
        existingUser.Cidade = updatedUser.Cidade;
        existingUser.Estado = updatedUser.Estado;

        await _context.SaveChangesAsync();
        return NoContent();
    }



    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var user = await _context.tb_user.FindAsync(id);
        if (user == null) return NotFound();

        _context.tb_user.Remove(user);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
