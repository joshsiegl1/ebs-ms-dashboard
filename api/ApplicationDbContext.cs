using System; 
using Microsoft.EntityFrameworkCore; 
using Pomelo.EntityFrameworkCore.MySql; 

using api.Models; 

namespace api 
{ 
    public class ApplicationDbContext : DbContext
    { 
        private readonly string DataBase = "ebs-ms-dashboard"; 
        private readonly string Password = "zyG4e2EaL2geHyB8"; 
        public DbSet<Employee> Employees { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        { 

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { 
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) 
        { 
            optionsBuilder.UseMySql($@"
                Database={DataBase}; 
                Data Source=ebs-timesheets.mysql.database.azure.com; 
                User Id=ebsadmin@ebs-timesheets; 
                Password={Password}", 
            new MySqlServerVersion(new Version(5, 7, 0))); 
        }
    }
}