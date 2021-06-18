namespace BambooFinder.Models
{
    public class Species
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Info { get; set; }
        public int MinHeight { get; set; }
        public int MaxHeight
        {
            get; set;
        }
        public bool Clumping { get; set; }
        public int MinZone { get; set; }
        public int MaxZone { get; set; }
        public int MinLight { get; set; }
        public int MaxLight { get; set; }
    }
}
// psql --file=Models/exampledata.sql BambooFinderDatabase