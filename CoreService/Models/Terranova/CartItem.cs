using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreService.Models.Terranova
{
    public class CartItem
    {
        public int Id { get; set; }
        [Required]
        public int CartId { get; set; }
        [Required]
        public int ProductId { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DateAdded { get; set; }

        // Entidades
        public Cart Cart { get; private set; }
        public Product Product { get; private set; }
    }
}