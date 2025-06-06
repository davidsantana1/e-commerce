using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CoreService.Model.Terranova
{
    public class WishListItem
    {
        public int Id { get; set; }
        [Required]
        public int WishListId { get; set; }
        [Required]
        public int ProductId { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DateAdded { get; set; }

        // Entidades
        public WishList WishList { get; private set; }
        public Product Product { get; private set; }
    }
}