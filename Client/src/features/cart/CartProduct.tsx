import Counter from "@/components/ui/Counter";
import { Product } from "@/interfaces/Product";
import { Link } from "react-router";

interface CartProductProps {
  product: Product;
}
function CartProduct({ product }: CartProductProps) {
  return (
    <div className="flex items-center justify-between py-4">
      <Link
        to={`/products/${product.category}/${product.id}`}
        className="flex items-center"
      >
        <img
          src={product.imgSrc}
          className="mr-5 h-24 w-24 rounded-xl object-cover"
        />
        <span className="text-sm sm:text-base">{product.name}</span>
      </Link>
      <div className="flex items-center pr-5">
        <span className="mr-5 text-sm font-bold sm:text-base">
          ${product.price}.00
        </span>
        <Counter />
      </div>
    </div>
  );
}

export default CartProduct;
