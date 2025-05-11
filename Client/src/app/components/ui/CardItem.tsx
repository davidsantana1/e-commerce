import { ICardItem } from "@/interfaces/ICardItem";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Link } from "react-router";

interface CardItemProps {
  item: ICardItem;
}

function CardItem({ item }: CardItemProps) {
  const { id, imgSrc, name, price } = item;
  const category = item.category.toLowerCase();

  return (
    <Link to={`/products/${category}/${id}`} className="group" id={id}>
      <img className="mb-4 max-w-48 rounded-xl" src={imgSrc} alt={name} />
      <Heading weight="bold">{name}</Heading>
      <Paragraph variant="dark">${price}</Paragraph>
    </Link>
  );
}

export default CardItem;
