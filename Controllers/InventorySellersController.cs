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
    // All of these routes will be at the base URL:     /api/InventorySellers
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case InventorySellersController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class InventorySellersController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public InventorySellersController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/InventorySellers
        //
        // Returns a list of all your InventorySellers
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InventorySellers>>> GetInventorySellers()
        {
            // Uses the database context in `_context` to request all of the InventorySellers, sort
            // them by row id and return them as a JSON array.
            return await _context.InventorySellers.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/InventorySellers/5
        //
        // Fetches and returns a specific inventorySellers by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<InventorySellers>> GetInventorySellers(int id)
        {
            // Find the inventorySellers in the database using `FindAsync` to look it up by id
            var inventorySellers = await _context.InventorySellers.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (inventorySellers == null)
            {
                // Return a `404` response to the client indicating we could not find a inventorySellers with this id
                return NotFound();
            }

            //  Return the inventorySellers as a JSON object.
            return inventorySellers;
        }

        // PUT: api/InventorySellers/5
        //
        // Update an individual inventorySellers with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a InventorySellers
        // variable named inventorySellers. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our InventorySellers POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInventorySellers(int id, InventorySellers inventorySellers)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != inventorySellers.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in inventorySellers to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from inventorySellers
            _context.Entry(inventorySellers).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!InventorySellersExists(id))
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
            return Ok(inventorySellers);
        }

        // POST: api/InventorySellers
        //
        // Creates a new inventorySellers in the database.
        //
        // The `body` of the request is parsed and then made available to us as a InventorySellers
        // variable named inventorySellers. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our InventorySellers POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<InventorySellers>> PostInventorySellers(InventorySellers inventorySellers)
        {
            // Indicate to the database context we want to add this new record
            _context.InventorySellers.Add(inventorySellers);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetInventorySellers", new { id = inventorySellers.Id }, inventorySellers);
        }

        // DELETE: api/InventorySellers/5
        //
        // Deletes an individual inventorySellers with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInventorySellers(int id)
        {
            // Find this inventorySellers by looking for the specific id
            var inventorySellers = await _context.InventorySellers.FindAsync(id);
            if (inventorySellers == null)
            {
                // There wasn't a inventorySellers with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.InventorySellers.Remove(inventorySellers);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(inventorySellers);
        }

        // Private helper method that looks up an existing inventorySellers by the supplied id
        private bool InventorySellersExists(int id)
        {
            return _context.InventorySellers.Any(inventorySellers => inventorySellers.Id == id);
        }
    }
}
