using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreService.Models.Terranova
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        [StringLength(maximumLength: 225)]
        public string Name { get; set; }
        public string? Description { get; set; }
        [StringLength(maximumLength: 100)]
        public string SKU { get; set; }
        [Range(0.00, 9999999999999999.99)]
        public decimal Price { get; set; }
        [StringLength(maximumLength: 10)]
        public string Currency { get; set; }
        public int StockQuantity { get; set; }
        [Range(0.00, 9999999999999999.99)]
        public decimal Weight { get; set; }
        [StringLength(maximumLength: 100)]
        public string Dimensions { get; set; }
        public bool IsActive { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime CreatedAt { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime UpdatedAt { get; set; }

        // Entidades
        public List<ProductImage> Images { get; private set; }
        public List<ProductVariant> Variants { get; private set; }
        public List<Order> Orders { get; private set; }
        public List<Invoice> Invoices { get; private set; }
        public List<SubCategory> SubCategories { get; private set; }
    }
}