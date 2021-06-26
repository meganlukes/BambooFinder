using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BambooFinder.Models
{
    public class Species
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        public string CommonName { get; set; }
        public string Info { get; set; }

        [Required]
        public int MinHeight { get; set; }

        [Required]
        public int MaxHeight
        {
            get; set;
        }

        [Required]
        public bool Clumping { get; set; }

        [Required]
        public int MinZone { get; set; }

        [Required]
        public int MaxZone { get; set; }

        [Required]
        public int MinLight { get; set; }

        [Required]
        public int MaxLight { get; set; }
        public List<InventorySellers> InventorySellers { get; set; }
    }
}
// psql --file=Models/exampledata.sql BambooFinderDatabase