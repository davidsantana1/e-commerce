import { ICardItem } from "@/interfaces/ICardItem";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Link } from "react-router";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";

interface CardItemProps {
  item: ICardItem;
}

function CardItem({ item }: CardItemProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { id, imgSrc, name, price } = item;

  const category = item.category.toLowerCase();

  const HeartIcon = isWishlisted ? IoHeart : IoHeartOutline;

  return (
    <div className="relative">
      <button
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        className="text-brand-50 absolute right-0 mt-2 mr-2 cursor-pointer rounded-full bg-red-500 p-2 hover:bg-red-700"
        onClick={() => setIsWishlisted((wishlisted) => !wishlisted)}
      >
        <HeartIcon size={20} />
      </button>

      <Link to={`/products/${category}/${id}`} className="group" id={id}>
        <img className="mb-4 max-w-48 rounded-xl" src={imgSrc} alt={name} />
        <Heading weight="bold">{name}</Heading>
        <Paragraph variant="dark">${price}</Paragraph>
      </Link>
    </div>
  );
}

export default CardItem;
