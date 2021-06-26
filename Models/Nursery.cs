using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BambooFinder.Models
{
    public class Nursery
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public bool Shipping { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zipcode { get; set; }
        public string Description { get; set; }
        [Required]
        public string Website { get; set; }
        public List<InventorySellers> InventorySellers { get; set; }
    }
}