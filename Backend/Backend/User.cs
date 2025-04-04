using System.ComponentModel.DataAnnotations;

namespace Backend;

public class User
{
    public int Id { get; set; }

    [MaxLength(255)]
    public string Nome { get; set; } = string.Empty;

    public int Idade { get; set; }

    [MaxLength(255)]
    public string EstadoCivil { get; set; } = string.Empty;

    [MaxLength(14)]
    public string CPF { get; set; } = string.Empty;

    [MaxLength(255)]
    public string Cidade { get; set; } = string.Empty;

    [MaxLength(2)]
    public string Estado { get; set; } = string.Empty;
}
