import CardItem from "@/components/ui/CardItem";
import { Product } from "@/interfaces/Product";

interface CategoryGridProps {
  products: Product[];
}
function CategoryGrid({ products }: CategoryGridProps) {
  return (
    <div className="mx-auto grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <CardItem key={product.name} item={product} />
      ))}
    </div>
  );
}

export default CategoryGrid;
