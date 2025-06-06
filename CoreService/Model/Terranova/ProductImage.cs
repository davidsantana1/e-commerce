using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreService.Model.Terranova
{
    public class ProductImage
    {
        public int Id { get; set; }
        [Required]
        public int ProductId { get; set; }
        [Required]
        public int ProductVariantId { get; set;}
        [StringLength(maximumLength: 500)]
        public string ImageUrl { get; set; }
        public bool IsMain { get; set; } = false;
        [DataType(DataType.DateTime)]
        public DateTime CreatedAt { get; set; }

        // Entidades
        public Product Product { get; private set; }
        public ProductVariant ProductVariant { get; private set; }
    }
}