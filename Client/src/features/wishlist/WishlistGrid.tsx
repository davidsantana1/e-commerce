import CardItem from "@/components/ui/CardItem";
import CartItemContainer from "@/components/ui/CartItemContainer";
import { getProducts } from "@/lib/utils";

function WishlistGrid() {
  const products = getProducts("wishlisted");

  return (
    <CartItemContainer isWishlist>
      {products.map((product) => (
        <CardItem key={product.name} item={product} />
      ))}
    </CartItemContainer>
  );
}

export default WishlistGrid;
