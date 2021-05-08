using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDTOs
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string password { get; set; }
    
    }
}