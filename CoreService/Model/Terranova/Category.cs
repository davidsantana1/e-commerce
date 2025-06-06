using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreService.Model.Terranova
{
    public class Category
    {
        public int Id { get; set; }
        [Required]
        [StringLength(maximumLength: 50)]
        public string Name { get; set; }
        [StringLength(maximumLength: 500)]
        public string Description { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime CreatedDate { get; set;}
        [DataType(DataType.DateTime)]
        public DateTime UpdatedAt { get; set;}

        // Entidades
        public List<SubCategory> SubCategories { get; private set; }
    }
}