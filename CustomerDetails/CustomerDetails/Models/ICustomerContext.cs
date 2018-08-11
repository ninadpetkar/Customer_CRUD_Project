using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerDetails.Models
{
    public interface ICustomerContext : IDisposable
    {
        DbSet<CustomerDetail> CustomerDetails { get; }
        Task<int> SaveChangesAsync();
        void MarkAsModified(CustomerDetail item);
    }
}
