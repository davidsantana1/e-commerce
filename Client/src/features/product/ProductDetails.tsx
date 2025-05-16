import { useState } from "react";
import Btn from "@/components/ui/Btn";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { Product } from "@/interfaces/Product";
import { IoCard, IoCart, IoHeart, IoHeartOutline } from "react-icons/io5";
import Counter from "@/components/ui/Counter";

interface ProductDetailsProps {
  product: Product;
}

function ProductDetails({ product }: ProductDetailsProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const showWishlisted = product.isWishlisted;

  return (
    <div className="self-center">
      <Heading className="text-stone-500" margin="sm">
        {product.brand}
      </Heading>
      <Heading className="text-brand-950 text-4xl" margin="sm" weight="md">
        {product.name}
      </Heading>
      <Heading className="text-brand-950 text-4xl" margin="md" weight="bold">
        ${product.price}.99
      </Heading>
      <Paragraph margin="lg" variant="dark">
        {product.description}
      </Paragraph>

      <Paragraph className="font-bold" variant="dark" margin="sm">
        Quantity:
      </Paragraph>
      <Counter className="mb-8" />

      <div className="mb-6 flex gap-4">
        <Btn className="flex items-center gap-2">
          <IoCart size={20} />
          Add To Cart
        </Btn>
        <Btn variant="secondary" className="flex items-center gap-2">
          <IoCard size={20} />
          Buy Now
        </Btn>
      </div>
      <Btn
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          product.isWishlisted = !product.isWishlisted;
        }}
        className={`flex items-center gap-2 border-2 border-red-500 font-[600] transition-all ${product.isWishlisted ? "text-brand-50 bg-red-500 hover:bg-transparent hover:text-red-500" : "hover:text-brand-50 text-red-500 hover:bg-red-500"}`}
        variant="outline"
      >
        {showWishlisted ? (
          <>
            {isHovered ? <IoHeartOutline size={20} /> : <IoHeart size={20} />}
            <span>Remove from Wishlist</span>
          </>
        ) : (
          <>
            {isHovered ? <IoHeart size={20} /> : <IoHeartOutline size={20} />}
            <span>Add to Wishlist</span>
          </>
        )}
      </Btn>
    </div>
  );
}

export default ProductDetails;
