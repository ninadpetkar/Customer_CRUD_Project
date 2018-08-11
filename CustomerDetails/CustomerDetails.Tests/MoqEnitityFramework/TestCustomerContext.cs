using CustomerDetails.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace CustomerDetails.Tests
{
    class TestCustomerContext : ICustomerContext
    {
        public TestCustomerContext()
            
        {
            this.CustomerDetails = new TestCustomerDbSet();
        }

        public DbSet<CustomerDetail> CustomerDetails { get; set; }

        public void Dispose()
        {
        }

        public void MarkAsModified(CustomerDetail item)
        {
        }

        public async Task<int> SaveChangesAsync()
        {
            await Task.Delay(1);
            return 0;
        }
    }
}
