using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreService.Model.Terranova
{
    public class ProductSubCategory
    {
        public int Id { get; set; }
        [Required]
        public int ProductId { get; set; }
        [Required]
        public int SubCategoryId { get; set; }

        // Entidades
        public Product Product { get; private set; }
        public SubCategory SubCategory { get; private set; }
    }
}