using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDTOs
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8,MinimumLength = 4)]
        public string password { get; set; }
    
    }
}