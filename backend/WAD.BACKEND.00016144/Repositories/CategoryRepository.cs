using Microsoft.EntityFrameworkCore;
using WAD.BACKEND._00016144.Data;
using WAD.BACKEND._00016144.Models;

namespace WAD.BACKEND._00016144.Repositories
{
    public class CategoryRepository : IRepository<Category>
    {
        private readonly GeneralDBContext _context;

        public CategoryRepository(GeneralDBContext context)
        {
            _context = context;
        }

        // Add or create new entity
        public async Task AddAsync(Category categories)
        {
            await _context.Categories.AddAsync(categories);
            await _context.SaveChangesAsync();
        }

        // Delete an entity
        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Categories.FindAsync(id);
            if (entity != null)
            {
                _context.Categories.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }

        // Retrieve all entity from the database
        public async Task<IEnumerable<Category>> GetAllAsync() => await _context.Categories.ToArrayAsync();

        // Retrieve an entity from database using only an id
        public async Task<Category> GetByIDAsync(int id) => await _context.Categories.FindAsync(id);

        // Update the entity
        public async Task UpdateAsync(Category categories)
        {
            _context.Entry(categories).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
