import Heading from "@/components/ui/Heading";
import { Product } from "@/interfaces/Product";
import CartProduct from "./CartProduct";

interface CartProductListProps {
  products: Product[];
}

function CartProductList({ products }: CartProductListProps) {
  return (
    <div className="px-5">
      <div className="flex justify-between border-b-1 border-stone-500 pb-4 text-stone-500">
        <Heading>Products</Heading>
        <Heading className="pr-11">Total</Heading>
      </div>
      <div className="divide-brand-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-brand-700 scrollbar-track-brand-300 mb-8 h-[26.4rem] divide-y-2 overflow-y-scroll lg:mb-0">
        {products.map((product) => (
          <CartProduct product={product} />
        ))}
      </div>
    </div>
  );
}

export default CartProductList;
