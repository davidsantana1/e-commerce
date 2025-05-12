import { Product } from "@/interfaces/Product";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Link } from "react-router";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";

interface CardItemProps {
  item: Product;
}

function CardItem({ item }: CardItemProps) {
  const { id, imgSrc, name, price, isWishlisted: isLiked } = item;
  const [isWishlisted, setIsWishlisted] = useState(isLiked);

  const category = item.category.toLowerCase();

  const HeartIcon = isWishlisted ? IoHeart : IoHeartOutline;

  const slicedName = name.length > 20 ? name.slice(0, 20).trim() + "..." : name;

  return (
    <div className="relative">
      <button
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        className="text-brand-50 absolute right-0 mt-2 mr-2 cursor-pointer rounded-full bg-red-500 p-2 hover:bg-red-700"
        onClick={() => setIsWishlisted((wishlisted) => !wishlisted)}
      >
        <HeartIcon size={20} />
      </button>

      <Link
        to={`/products/${category}/${id}`}
        className="group"
        id={id.toString()}
      >
        <img
          className="mb-4 aspect-square max-w-48 rounded-xl object-cover"
          src={imgSrc}
          alt={name}
        />
        <Heading weight="bold">{slicedName}</Heading>
        <Paragraph variant="dark">${price}</Paragraph>
      </Link>
    </div>
  );
}

export default CardItem;
