using Microsoft.EntityFrameworkCore;
using WAD.BACKEND._00016144.Data;
using WAD.BACKEND._00016144.Models;

namespace WAD.BACKEND._00016144.Repositories
{
    public class BookRepository : IRepository<Book>
    {
        private readonly GeneralDBContext _context;

        public BookRepository(GeneralDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Book>> GetAllAsync() => await _context.Books.ToArrayAsync();

        public async Task<Book> GetByIDAsync(int id)
        {
            return await _context.Books.Include(t => t.Category).FirstOrDefaultAsync(t => t.ID == id);
        }

        public async Task AddAsync(Book entity)
        {
            entity.Category = await _context.Categories.FindAsync(entity.CategoryID.Value);

            await _context.Books.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Book entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Books.FindAsync(id);
            if (entity != null)
            {
                _context.Books.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
