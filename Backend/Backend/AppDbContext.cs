﻿using Microsoft.EntityFrameworkCore;

namespace Backend;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> tb_user { get; set; }
}
