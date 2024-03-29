using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly ITokenService _itokenService;
        public AccountController(DataContext context, ITokenService itokenService)
        {
            this._itokenService = itokenService;
            this._context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register(RegisterDTOs registerDtos)
        {
            if (await UserExists(registerDtos.Username)) return BadRequest("Username is Taken");
            using var hmac = new HMACSHA512();
            var user = new AppUser
            {
                UserName = registerDtos.Username.ToLower(),
                passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDtos.password)),
                passwordSalt = hmac.Key
            };
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _context.Users.Include(p => p.Photos)
             .SingleOrDefaultAsync(x => x.UserName == loginDto.Username);

            if (user == null) return Unauthorized("Invalid username");
            using var hmac = new HMACSHA512(user.passwordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.password));
            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.passwordHash[i]) return Unauthorized("Invalid password");
            }
            return new UserDto
            {
                Username = user.UserName,
                Token = _itokenService.CreateToken(user),
                PhotoUrl = user.Photos.FirstOrDefault(x => x.IsMain)?.Url
            };
        }
        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }
    }
}