using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CustomerDetails.Models
{
    public class CustomerContext : DbContext, ICustomerContext
    {
        public CustomerContext()
            : base("name=CustomerContext")
        {
        }
        public DbSet<CustomerDetail> CustomerDetails { get; set; }
        public void MarkAsModified(CustomerDetail item)
        {
            Entry(item).State = EntityState.Modified;
        }
    }
}