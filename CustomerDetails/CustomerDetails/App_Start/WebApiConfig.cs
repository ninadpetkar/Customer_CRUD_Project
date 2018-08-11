using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Validation;
using Ext.FluentValidation.WebApi;
using FluentValidation;
using CustomerDetails.ActionFilters;
using CustomerDetails.Models;
using CustomerDetails.Unity;
using Unity;
using Unity.Lifetime;
using System.Web.Http.Cors;

namespace CustomerDetails
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));

            config.Filters.Add(new ValidateModelStateFilter());
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var container = new UnityContainer();
            container.RegisterType<ICustomerContext, CustomerContext>(new HierarchicalLifetimeManager());
            config.DependencyResolver = new UnityResolver(container);
        }
    }
}
