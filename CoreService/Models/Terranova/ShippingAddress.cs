using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace CoreService.Models.Terranova
{
    public class ShippingAddress
    {
        public int Id { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        [StringLength(maximumLength: 100)]
        public string FullName { get; set; }
        [Required]
        [Phone]
        [StringLength(maximumLength: 20)]
        public string PhoneNumber { get; set; }
        [Required]
        [StringLength(maximumLength: 100)]
        public string AddressLine1 { get; set; }
        [StringLength(maximumLength: 100)]
        public string AddressLine2 { get; set; }
        [Required]
        [StringLength(maximumLength: 50)]
        public string Country { get; set; }
        [Required]
        [StringLength(maximumLength: 50)]
        public string City { get; set; }
        [Required]
        [StringLength(maximumLength: 50)]
        public string State { get; set; }
        [Required]
        [StringLength(maximumLength: 20)]
        public string PostalCode { get; set; }
        public bool IsDefault { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime CreatedAt { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime UpdatedAt { get; set; }

        // Entidades
        public User User { get; private set;}
        public List<Order> Orders { get; private set; }
        public List<Invoice> Invoices { get; private set; }
    }
}