import CardItem from "@/components/ui/CardItem";
import CartItemContainer from "@/components/ui/CartItemContainer";
import { Product } from "@/interfaces/Product";

interface CategoryGridProps {
  products: Product[];
}
function CategoryGrid({ products }: CategoryGridProps) {
  return (
    <CartItemContainer>
      {products.map((product) => (
        <CardItem key={product.name} item={product} />
      ))}
    </CartItemContainer>
  );
}

export default CategoryGrid;
