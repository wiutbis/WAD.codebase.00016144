using Microsoft.EntityFrameworkCore;
using WAD.BACKEND._00016144.Models;

namespace WAD.BACKEND._00016144.Data
{
    public class GeneralDBContext : DbContext
    {
        public GeneralDBContext(DbContextOptions<GeneralDBContext> options) : base(options) { }
        public DbSet<Book> Books { get; set; }
        public DbSet<Category> Categories { get; set; }

        
    }
}
