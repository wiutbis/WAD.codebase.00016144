using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace WAD.BACKEND._00016144.Models
{
    public class Book
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "Title is Required")]
        [DisplayName("Title")]
        public string? Title { get; set; }

        [Required]
        [DisplayName("Description")]
        public string? Description { get; set; }

        [Required]
        public int? CategoryID { get; set; }
        
        public Category? Category { get; set; }
        public DateTime? PublishedDate { get; set; }
        public string? Author { get; set; }
    }
}
