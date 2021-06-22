using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BambooFinder.Models;

namespace BambooFinder.Controllers
{
    // All of these routes will be at the base URL:     /api/Species
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case SpeciesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class SpeciesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public SpeciesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Species
        //
        // Returns a list of all your Species
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Species>>> GetSpecies(string filter)
        {
            // Uses the database context in `_context` to request all of the Species, sort
            // them by row id and return them as a JSON array.
            if (filter == null)
            {
                return await _context.Species.ToListAsync();
            }
            else
            {
                return await _context.Species.Where(restaurant => restaurant.Name.ToLower().Contains(filter.ToLower())).ToListAsync();
            }

        }

        // GET: api/Species/5
        //
        // Fetches and returns a specific species by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Species>> GetSpecies(int id)
        {
            // Find the species in the database using `FindAsync` to look it up by id
            var species = await _context.Species.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (species == null)
            {
                // Return a `404` response to the client indicating we could not find a species with this id
                return NotFound();
            }

            //  Return the species as a JSON object.
            return species;
        }

        // PUT: api/Species/5
        //
        // Update an individual species with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Species
        // variable named species. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Species POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSpecies(int id, Species species)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != species.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in species to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from species
            _context.Entry(species).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!SpeciesExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(species);
        }

        // POST: api/Species
        //
        // Creates a new species in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Species
        // variable named species. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Species POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Species>> PostSpecies(Species species)
        {
            // Indicate to the database context we want to add this new record
            _context.Species.Add(species);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetSpecies", new { id = species.Id }, species);
        }

        // DELETE: api/Species/5
        //
        // Deletes an individual species with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpecies(int id)
        {
            // Find this species by looking for the specific id
            var species = await _context.Species.FindAsync(id);
            if (species == null)
            {
                // There wasn't a species with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Species.Remove(species);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(species);
        }

        // Private helper method that looks up an existing species by the supplied id
        private bool SpeciesExists(int id)
        {
            return _context.Species.Any(species => species.Id == id);
        }
    }
}
