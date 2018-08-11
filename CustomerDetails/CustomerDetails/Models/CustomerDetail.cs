using System.ComponentModel.DataAnnotations;
using FluentValidation;
using FluentValidation.Attributes;
using Microsoft.Ajax.Utilities;

namespace CustomerDetails
{
    using System;
    using System.Collections.Generic;
    [MetadataType(typeof(CustomerDetailMetadata))]
    public partial class CustomerDetail
    {

        private class CustomerDetailMetadata
        {
            [Required(ErrorMessage = "FirstName is Required")]
            [MaxLength(50, ErrorMessage = "First Name can not be more than 50 characters")]
            [MinLength(2, ErrorMessage = "First Name should be more than 2 characters")]
            public string FirstName { get; set; }

            [Required(ErrorMessage = "LastName is Required")]
            [MinLength(2, ErrorMessage = "Last Name should be more than 2 characters")]
            [MaxLength(50, ErrorMessage = "Last Name can not be more than 50 characters")]
            public string LastName { get; set; }

            [Required(ErrorMessage = "Email is Required")]
            [EmailAddress(ErrorMessage = "Email is invalid")]
            public string Email { get; set; }
             
            [Required (ErrorMessage = "Phone number is Required")]
            [RegularExpression("([0-9]+)", ErrorMessage = "Phone number is invalid")]
            public string PhoneNumber { get; set; }

            public bool? IsActive { get; set; }

        }

    }

    
}
