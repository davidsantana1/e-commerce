using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreService.Model
{
    public class OrderItem
    {
        public int Id { get; set; }
        [Required]
        public int OrderId { get; set; }
        [Required]
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        [Range(0.00, 9999999999999999.99)]
        public decimal UnitPrice { get; set; }
        [Range(0.00, 9999999999999999.99)]
        public decimal TotalPrice { get; set; }

        // Entidades
        public Order Order { get; private set; }
        public Product Product { get; private set; }
    }
}