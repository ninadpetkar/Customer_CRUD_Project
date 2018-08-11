using CustomerDetails.Controllers;
using CustomerDetails.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Results;
using System.Web.Http;

namespace CustomerDetails.Tests.Controllers
{
    [TestClass]
    public class CustomerDetailsTest
    {
        [TestMethod]
        public void PostCustomerDetails_ShouldReturnSameCustomerDetails()
        {
            var controller = new CustomerDetailsController(new TestCustomerContext());

            var item = GetDemoCustomerDetails();

            var result = controller.PostCustomerDetail(item).Result as CreatedAtRouteNegotiatedContentResult<CustomerDetail>;

            Assert.IsNotNull(result);
            Assert.AreEqual(result.RouteName, "DefaultApi");
            Assert.AreEqual(result.RouteValues["id"], result.Content.CustomerId);
            Assert.AreEqual(result.Content.FirstName, item.FirstName);
        }

        [TestMethod]
        public void PutCustomerDetails_ShouldReturnStatusCode()
        {
            var controller = new CustomerDetailsController(new TestCustomerContext());

            var item = GetDemoCustomerDetails();

            var result = controller.PutCustomerDetail(item.CustomerId, item);
            Assert.IsNotNull(result);
            
            Assert.AreEqual(HttpStatusCode.NoContent.GetTypeCode(), result.Status.GetTypeCode());
        }

        [TestMethod]
        public void PutCustomerDetails_ShouldFail_WhenDifferentID()
        {
            var controller = new CustomerDetailsController(new TestCustomerContext());

            var badresult = controller.PutCustomerDetail(999, GetDemoCustomerDetails());
            Assert.IsInstanceOfType(badresult.Result, typeof(BadRequestResult));
        }

        [TestMethod]
        public void GetCustomerDetails_ShouldReturnCustomerDetailsWithSameID()
        {
            var context = new TestCustomerContext();
           
            context.CustomerDetails.Add(GetDemoCustomerDetails());

            var controller = new CustomerDetailsController(context);
            var result = controller.GetCustomerDetail(3);

            Assert.IsNotNull(result);
            Assert.AreEqual(HttpStatusCode.NoContent.GetTypeCode(), result.Status.GetTypeCode());            
        }

        [TestMethod]
        public void GetCustomerDetailss_ShouldReturnAllCustomerDetailss()
        {
            var context = new TestCustomerContext();
            context.CustomerDetails.Add(new CustomerDetail { CustomerId = 6, FirstName = "TestFirstName", LastName = "TestLastName", Email = "a.b@c.com", PhoneNumber = "987564231", IsActive = true });
            context.CustomerDetails.Add(new CustomerDetail { CustomerId = 7, FirstName = "TestFirstName", LastName = "TestLastName", Email = "a.b@c.com", PhoneNumber = "987564231", IsActive = true });
            context.CustomerDetails.Add(new CustomerDetail { CustomerId = 8, FirstName = "TestFirstName", LastName = "TestLastName", Email = "a.b@c.com", PhoneNumber = "987564231", IsActive = true });

            var controller = new CustomerDetailsController(context);
            var result = controller.GetCustomerDetails() as TestCustomerDbSet;

            Assert.IsNotNull(result);
            Assert.AreEqual(3, result.Local.Count);
        }

        [TestMethod]
        public void DeleteCustomerDetails_ShouldReturnOK()
        {
            var context = new TestCustomerContext();
            var item = GetDemoCustomerDetails();
            context.CustomerDetails.Add(item);

            var controller = new CustomerDetailsController(context);
            var result = controller.DeleteCustomerDetail(3);
                

            Assert.IsNotNull(result);
            Assert.AreEqual(HttpStatusCode.OK.GetTypeCode(), result.Status.GetTypeCode());
        }

        CustomerDetail GetDemoCustomerDetails()
        {
            return new CustomerDetail() { CustomerId = 3, FirstName="TestFirstName", LastName="TestLastName", Email="a.b@c.com", PhoneNumber="987564231", IsActive=true };
        }
    }
}
