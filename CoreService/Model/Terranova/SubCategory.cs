using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreService.Model.Terranova
{
    public class SubCategory
    {
        public int Id { get; set; }
        [Required]
        public int CategoryId { get; set; }
        [Required]
        [StringLength(maximumLength: 50)]
        public string Name { get; set; }
        [StringLength(maximumLength: 500)]
        public string Description { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime CreatedAt { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime UpdatedAt { get; set;}

        // Entidades
        public Category Category { get; private set; }
        public List<Product> Products { get; private set; }
    }
}