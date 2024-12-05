using Microsoft.AspNetCore.Mvc;
using WAD.BACKEND._00016144.Models;
using WAD.BACKEND._00016144.Repositories;

namespace WAD.BACKEND._00016144.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BookController : ControllerBase
    {





        private readonly IRepository<Book> _bookRepository;
        public BookController(IRepository<Book> toDoItemsRepository)
        {
            _bookRepository = toDoItemsRepository;
        }


    
        [HttpGet]
        public async Task<IEnumerable<Book>> GetAll() => await _bookRepository.GetAllAsync();



        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Book), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetByID(int id)
        {
            var resultedToDo = await _bookRepository.GetByIDAsync(id);
            return resultedToDo == null ? NotFound() : Ok(resultedToDo);
        }



        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(Book items)
        {
            await _bookRepository.AddAsync(items);
            return Ok(items);
            //return CreatedAtAction(nameof(GetByID), new { id = items.ID }, items);
        }


        [HttpPut]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Book items) 
        {
            //if(id!=items.ID) return BadRequest();
            await _bookRepository.UpdateAsync(items);
            return Ok(items);
        }


        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            await _bookRepository.DeleteAsync(id);
            return NoContent(); 


        }



    }
}
