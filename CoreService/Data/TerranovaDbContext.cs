using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreService.Models.Terranova;
using Microsoft.EntityFrameworkCore;

namespace CoreService.Data
{
    public class TerranovaDbContext : DbContext
    {
        public TerranovaDbContext(DbContextOptions<TerranovaDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure your entity mappings here
            // Example: modelBuilder.Entity<YourEntity>().ToTable("YourTableName");
        }

        // Define DbSet properties for your entities
        // public DbSet<YourEntity> YourEntities { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<InvoiceItem> InvoiceItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }
        public DbSet<ProductSubCategory> ProductSubCategories { get; set; }
        public DbSet<ProductVariant> ProductVariants { get; set; }
        public DbSet<ShippingAddress> ShippingAddresses { get; set; }
        public DbSet<SubCategory> SubCategories { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<WishList> WishLists { get; set; }
        public DbSet<WishListItem> WishListItems { get; set; }
    }
}