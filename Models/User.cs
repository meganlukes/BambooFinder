using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace BambooFinder.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string FullName { get; set; }
        public string PrefName { get; set; }
        [Required]
        public string NurseryName { get; set; }
        [Required]
        public string Email { get; set; }
        [JsonIgnore]
        public string HashedPassword { get; set; }
        public string Password
        {
            set
            {
                this.HashedPassword = new PasswordHasher<User>().HashPassword(this, value);
            }
        }
        public bool IsValidPassword(string password)
        {
            // Look to see if this password, and the user's hashed password can match
            var passwordVerification = new PasswordHasher<User>().VerifyHashedPassword(this, this.HashedPassword, password);
            // Return True if the verification was a success
            return passwordVerification == PasswordVerificationResult.Success;
        }
    }
}