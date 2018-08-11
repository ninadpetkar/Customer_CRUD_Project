using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using CustomerDetails;
using CustomerDetails.ActionFilters;
using CustomerDetails.Models;

namespace CustomerDetails.Controllers
{
    public class CustomerDetailsController : ApiController
    {
        private readonly Models.ICustomerContext db;

        public CustomerDetailsController() { }

        public CustomerDetailsController(ICustomerContext dbContext)
        {
            db = dbContext;
        }

        // GET: api/CustomerDetails
        public IQueryable<CustomerDetail> GetCustomerDetails()
        {
            var result = db.CustomerDetails;
            return result;
        }

        // GET: api/CustomerDetails/5
        [ResponseType(typeof(CustomerDetail))]
        public async Task<IHttpActionResult> GetCustomerDetail(int id)
        {
            CustomerDetail customerDetail = await db.CustomerDetails.FindAsync(id);
            if (customerDetail == null)
            {
                return NotFound();
            }

            return Ok(customerDetail);
        }

        // PUT: api/CustomerDetails/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCustomerDetail(int id, CustomerDetail customerDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != customerDetail.CustomerId)
            {
                return BadRequest();
            }

            db.MarkAsModified(customerDetail);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CustomerDetails
        [ResponseType(typeof(CustomerDetail))]
        [ValidateModelStateFilter]
        public async Task<IHttpActionResult> PostCustomerDetail([FromBody] CustomerDetail customerDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CustomerDetails.Add(customerDetail);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = customerDetail.CustomerId }, customerDetail);
        }

        // DELETE: api/CustomerDetails/5
        [ResponseType(typeof(CustomerDetail))]
        public async Task<IHttpActionResult> DeleteCustomerDetail(int id)
        {
            CustomerDetail customerDetail = await db.CustomerDetails.FindAsync(id);
            if (customerDetail == null)
            {
                return NotFound();
            }
            customerDetail.IsActive = false;            
            db.MarkAsModified(customerDetail);
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return Ok(customerDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CustomerDetailExists(int id)
        {
            return db.CustomerDetails.Count(e => e.CustomerId == id) > 0;
        }
    }
}