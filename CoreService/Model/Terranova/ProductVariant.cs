using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreService.Model.Terranova
{
    public class ProductVariant
    {
        public int Id { get; set; }
        [Required]
        public int ProductId { get; set; }
        [StringLength(maximumLength: 50)]
        public string VariantName { get; set; }
        [StringLength(maximumLength: 50)]
        public string VariantValue { get; set; }
        [Range(0.00, 9999999999999999.99)]
        public decimal PriceAdjustment { get; set; }
        public int StockQuantity { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime CreatedAd { get; set; }

        // Entidades
        public Product Product { get; private set; }
        public List<ProductImage> Images { get; private set; }
    }
}