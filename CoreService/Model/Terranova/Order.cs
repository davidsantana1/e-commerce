using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreService.Model.Terranova
{
    public class Order
    {
        public int Id { get; set; }
        [Required]
        public int UserId { get; set;}
        [Required]
        public int ShippingAddressId { get; set; }
        [Required]
        [StringLength(maximumLength: 10)]
        public string Currency { get; set; }
        [Required]
        [Range(0.00, 9999999999999999.99)]
        public decimal TotalAmount { get; set; }
        [Range(0.00, 9999999999999999.99)]
        public decimal TaxAmount { get; set; }
        [Range(0.00, 9999999999999999.99)]
        public decimal DiscountAmount { get; set; }
        [Range(0.00, 9999999999999999.99)]
        public decimal ShippingAmount { get; set; }
        [StringLength(maximumLength: 50)]
        public string OrderStatus { get; set; }
        [StringLength(maximumLength: 50)]
        public string PaymentStatus { get; set; }
        [StringLength(maximumLength: 50)]
        public string PaymentMethod { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime OrderDate { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DueDate { get; set; }

        // Entidades
        public User User { get; private set; }
        public Invoice Invoice { get; private set; }
        public List<Product> Products { get; private set; }
    }
}