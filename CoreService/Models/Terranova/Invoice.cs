using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CoreService.Models.Terranova
{
    public class Invoice
    {
        public int Id { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public int ShippingAddressId { get; set; }
        [Required]
        public int OrderId { get; set;}
        [StringLength(maximumLength: 10)]
        public string Currency { get; set; }
        [Range(0.00, 9999999999999999.99)]
        public decimal TotalAmount { get; set; }
        [Range(0.00, 9999999999999999.99)]
        public decimal TaxAmount { get; set; }
        [Range(0.00, 9999999999999999.99)]
        public decimal DiscountAmount { get; set; }
        [Range(0.00, 9999999999999999.99)]
        public decimal ShippingAmount { get; set; }
        [StringLength(maximumLength: 50)]
        public string PaymentStatus { get; set; }
        [StringLength(maximumLength: 50)]
        public string InvoiceStatus { get; set; }
        [StringLength(maximumLength: 50)]
        public string PaymentMethod { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime InvoiceDate { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DueDate { get; set; }

        // Entidades
        public User User { get; private set;}
        public ShippingAddress ShippingAddress { get; private set;}
        public Order Order { get; private set; }
        public List<Product> Products { get; private set; }
    }
}