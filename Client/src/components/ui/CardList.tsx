import { Product } from "@/interfaces/Product";
import CardItem from "./CardItem";

interface CardListProps {
  products: Product[];
}

function CardList({ products }: CardListProps) {
  return (
    <div className="flex gap-4">
      {products.map((product: Product) => (
        <CardItem item={product} />
      ))}
    </div>
  );
}

export default CardList;
