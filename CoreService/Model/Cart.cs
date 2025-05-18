using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreService.Model
{
    public class Cart
    {
        public int Id { get; set; }
        [Required]
        public int UserId { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime CreatedAt { get; set;}

        // Entidades
        public User User { get; private set; }
        public IEnumerable<Product> Products { get; private set; }
    }
}