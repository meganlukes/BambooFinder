using System.Collections.Generic;

namespace BambooFinder.Models
{
    public class Nursery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Shipping { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zipcode { get; set; }
        public string Description { get; set; }
        public string Website { get; set; }
        public List<Species> Inventory { get; set; }
    }
}