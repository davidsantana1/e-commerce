import { ICardItem } from "@/interfaces/ICardItem";
import CardItem from "./CardItem";

const cardItems: ICardItem[] = [
  {
    id: "1",
    name: "Iphone 15 Pro Max",
    price: 550,
    imgSrc:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    name: "Iphone 15 Pro Max",
    price: 550,
    imgSrc:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    name: "Iphone 15 Pro Max",
    price: 550,
    imgSrc:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    name: "Iphone 15 Pro Max",
    price: 550,
    imgSrc:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    name: "Iphone 15 Pro Max",
    price: 550,
    imgSrc:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    name: "Iphone 15 Pro Max",
    price: 550,
    imgSrc:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    name: "Iphone 15 Pro Max",
    price: 550,
    imgSrc:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "Macbook Pro",
    price: 900,
    imgSrc:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "Tshirt",
    price: 15,
    imgSrc:
      "https://images.unsplash.com/photo-1621951753163-ee63e7fc147e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    name: "Tshirt",
    price: 15,
    imgSrc:
      "https://images.unsplash.com/photo-1621951753163-ee63e7fc147e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function CardList() {
  return (
    <div className="flex gap-4">
      {cardItems.map((cardItem: ICardItem) => (
        <CardItem item={cardItem} />
      ))}
    </div>
  );
}

export default CardList;
