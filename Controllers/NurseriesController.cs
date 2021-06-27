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
    // All of these routes will be at the base URL:     /api/Nurseries
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case NurseriesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class NurseriesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public NurseriesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Nurseries
        //
        // Returns a list of all your Nurseries
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Nursery>>> GetNurseries(string filter)
        {
            // Uses the database context in `_context` to request all of the Nurseries, sort
            // them by row id and return them as a JSON array.
            // return await _context.Nurseries.OrderBy(row => row.Id).ToListAsync();
            // .ThenInclude(inventorySellers => inventorySellers.SpeciesId)
            if (filter == null)
            {
                return await _context.Nurseries.OrderBy(row => row.State).Include(nursery => nursery.InventorySellers).ToListAsync();
            }
            else
            {
                return await _context.Nurseries.Where(nursery => nursery.Name.ToLower().Contains(filter.ToLower()) || nursery.State.ToLower().Contains(filter.ToLower())).
                Include(nursery => nursery.InventorySellers).
                ToListAsync();
            }
        }

        // GET: api/Nurseries/5
        //
        // Fetches and returns a specific nurseries by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Nursery>> GetNurseries(int id)
        {
            // Find the nurseries in the database using `FindAsync` to look it up by id
            var nurseries = await _context.Nurseries.
            Include(nursery => nursery.InventorySellers).
            Where(nursery => nursery.Id == id).
            FirstOrDefaultAsync();

            // If we didn't find anything, we receive a `null` in return
            if (nurseries == null)
            {
                // Return a `404` response to the client indicating we could not find a nurseries with this id
                return NotFound();
            }

            //  Return the nurseries as a JSON object.
            return nurseries;
        }

        // PUT: api/Nurseries/5
        //
        // Update an individual nurseries with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Nurseries
        // variable named nurseries. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Nurseries POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNurseries(int id, Nursery nurseries)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != nurseries.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in nurseries to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from nurseries
            _context.Entry(nurseries).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!NurseriesExists(id))
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
            return Ok(nurseries);
        }

        // POST: api/Nurseries
        //
        // Creates a new nurseries in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Nurseries
        // variable named nurseries. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Nurseries POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Nursery>> PostNurseries(Nursery nurseries)
        {
            // Indicate to the database context we want to add this new record
            _context.Nurseries.Add(nurseries);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetNurseries", new { id = nurseries.Id }, nurseries);
        }

        // DELETE: api/Nurseries/5
        //
        // Deletes an individual nurseries with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNurseries(int id)
        {
            // Find this nurseries by looking for the specific id
            var nurseries = await _context.Nurseries.FindAsync(id);
            if (nurseries == null)
            {
                // There wasn't a nurseries with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Nurseries.Remove(nurseries);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(nurseries);
        }

        // Private helper method that looks up an existing nurseries by the supplied id
        private bool NurseriesExists(int id)
        {
            return _context.Nurseries.Any(nurseries => nurseries.Id == id);
        }
    }
}
