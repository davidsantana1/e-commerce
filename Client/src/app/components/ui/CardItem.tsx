import { ICardItem } from "@/interfaces/ICardItem";
import Heading from "@/ui/Heading";
import Paragraph from "@/ui/Paragraph";
import { Link } from "react-router";

interface CardItemProps {
  item: ICardItem;
}

function CardItem({ item }: CardItemProps) {
  const { id, imgSrc, name, price } = item;
  return (
    <Link to={`/products/${id}`} className="group" id={id}>
      <img className="mb-4 max-w-56 rounded-xl" src={imgSrc} alt={name} />
      <Heading weight="bold">{name}</Heading>
      <Paragraph variant="dark">${price}</Paragraph>
    </Link>
  );
}

export default CardItem;
