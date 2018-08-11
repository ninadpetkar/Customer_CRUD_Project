using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerDetails.Tests
{
    class TestCustomerDbSet : TestDbSet<CustomerDetail>
    {
        public override CustomerDetail Find(params object[] keyValues)
        {
            return this.SingleOrDefault(customer => customer.CustomerId == (int)keyValues.Single());
        }
    }
}
