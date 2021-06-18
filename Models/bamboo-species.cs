namespace BambooFinder.Models
{
    public class BambooSpecies
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Info { get; set; }
        public int Height { get; set; }
        public bool GrowthHabit { get; set; }
        public int Zone { get; set; }
        public int Light { get; set; }
    }
}