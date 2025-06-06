using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreService.Model.Terranova
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        [StringLength(maximumLength: 50)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(maximumLength: 50)]
        public string LastName { get; set; }
        [Phone]
        [StringLength(maximumLength: 20)]
        public string PhoneNumber { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DateOfBirth { get; set; }
        public char Gender { get; set; }
        [Required]
        [StringLength(maximumLength: 225)]
        public string PasswordHash { get; set; }
        [Required]
        [StringLength(maximumLength: 225)]
        public string Salt { get; set; }
        [Required]
        [StringLength(maximumLength: 225)]
        public string RoleHash { get; set; }
        public bool IsActive { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime CreatedAt { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime UpdatedAt { get; set; }
        [StringLength(maximumLength: 50)]
        public string Country { get; set; }
        [StringLength(maximumLength: 50)]
        public string City { get; set; }
        [StringLength(maximumLength: 50)]
        public string State { get; set; }
        [StringLength(maximumLength: 100)]
        public string Address { get; set; }
        [StringLength(maximumLength: 20)]
        public string PostalCode { get; set; }
        [EmailAddress]
        [StringLength(maximumLength: 50)]
        public string EmailAddress { get; set; }

        // Entidades
        public Cart Cart { get; private set; }
        public WishList WishList { get; private set; }
        public List<ShippingAddress> ShippingAddresses { get; private set; }
        public List<Order> Orders { get; private set; }
        public List<Invoice> Invoices { get; private set; }
    }
}