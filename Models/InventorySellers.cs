namespace BambooFinder.Models
{
    public class InventorySellers
    {
        public int Id { get; set; }
        public int SpeciesId { get; set; }
        public int NurseryId { get; set; }
        public Species Species { get; set; }
        public Nursery Nursery { get; set; }
    }
}