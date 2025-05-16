import { Product } from "@/interfaces/Product";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import { truncateName } from "@/lib/utils";

interface CardItemProps {
  item: Product;
}

function CardItem({ item }: CardItemProps) {
  const { id, images, name, price, isWishlisted: isLiked } = item;
  const imgSrc = images[0];
  const [isWishlisted, setIsWishlisted] = useState(isLiked);

  const category = item.category.toLowerCase();

  const HeartIcon = isWishlisted ? IoHeart : IoHeartOutline;

  const slicedName = truncateName(name);

  return (
    <div className="xxs:max-w-32 xs:max-w-35 xsm:max-w-44 xmd:max-w-46 relative max-w-30">
      <button
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        className="text-brand-50 absolute top-2 right-2 cursor-pointer rounded-full bg-red-500 p-2 hover:bg-red-700"
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
          className="xxs:max-w-32 xs:max-w-35 xsm:max-w-44 xmd:max-w-46 mb-4 aspect-square max-w-30 rounded-xl object-cover"
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
