# Database: Terranova

This repository contains all information you need to create and know the design behind the database [Terranova].

## Contents

- Database creation script
- User information
- Structure
	-Tables with relationships and foreign keys
	- Stored procedures
	- Views and functions
	- Indexes and basic optimization

## Requirements

- SQL Server 2022 or higher
- SQL Server Management Studio (SSMS)

## Database creation script

1. Open SQL Server Management Studio.
2. Open Data folder and run the scripts in order.

## User information
- User -> terranova
- password -> 123456789

## Structure

### Main Tables

- User -> Stores user information.
- ShippingAddress -> Delivery addresses per user.
- Cart -> Active shopping carts for users.
- Wishlist -> Articles that the user could want.
- Order -> Placed orders.
- Invoice -> Billing and payments.
- Product -> Product Catalog.
- ProductVariant -> Variants of products (size, color, etc.)
- ProductImage -> Images associated with products.
- Category -> Set of categories.
- SubCategory -> Set of subcategories.

### Foreign Keys

- ProductImage->ProductVariant (NO_ACTION)
- WishList->User (CASCADE)
- Cart->User (CASCADE)
- ShippingAddress->User (CASCADE)
- Order->User (CASCADE)
- Invoice->User (CASCADE)
- WishListItem->WishList (CASCADE)
- CartItem->Cart (CASCADE)
- Order->ShippingAddress (NO_ACTION)
- Invoice->ShippingAddress (NO_ACTION)
- OrderItem->Order (CASCADE)
- Invoice->Order (NO_ACTION)
- InvoiceItem->Invoice (CASCADE)
- SubCategory->Category (CASCADE)
- ProductSubCategory->SubCategory (CASCADE)
- ProductSubCategory->Product (CASCADE)
- ProductVariant->Product (CASCADE)
- ProductImage->Product (CASCADE)
- InvoiceItem->Product (NO_ACTION)
- WishListItem->Product (CASCADE)
- CartItem->Product (CASCADE)
- OrderItem->Product (NO_ACTION)


### Stored Procedures

### Views

### Functions

### Index