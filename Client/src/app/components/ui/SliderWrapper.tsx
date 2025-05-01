import Heading from "@/ui/Heading";
import CardList from "./CardList";
import {
  IoArrowBackCircle,
  IoArrowForwardCircle,
  IoHeart,
} from "react-icons/io5";
import { useRef, useState, useEffect } from "react";

function SliderWrapper() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateButtonState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setAtStart(el.scrollLeft === 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateButtonState();
    el.addEventListener("scroll", updateButtonState);
    return () => el.removeEventListener("scroll", updateButtonState);
  }, []);

  return (
    <>
      <div className="mb-3 flex gap-2">
        <IoHeart className="text-red-500" size={20} />
        <Heading weight="bold" size="lg">
          Your Wishlist
        </Heading>
      </div>

      {/* Make this container relative to scope buttons */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-brand-700 scrollbar-track-brand-300 scrollbar-thin h-full overflow-x-auto overflow-y-hidden"
        >
          <CardList />
        </div>

        {/* Arrows scoped here */}
        <IoArrowBackCircle
          onClick={() => !atStart && scroll("left")}
          className={`absolute top-1/2 left-0 -translate-y-1/2 text-4xl opacity-50 transition-all hover:opacity-100 ${
            atStart
              ? "cursor-not-allowed text-slate-500"
              : "text-secondary-500 hover:text-secondary-600 cursor-pointer"
          }`}
        />
        <IoArrowForwardCircle
          onClick={() => !atEnd && scroll("right")}
          className={`absolute top-1/2 right-0 -translate-y-1/2 text-4xl opacity-50 transition-all hover:opacity-100 ${
            atEnd
              ? "cursor-not-allowed text-slate-500"
              : "text-secondary-500 hover:text-secondary-600 cursor-pointer"
          }`}
        />
      </div>
    </>
  );
}

export default SliderWrapper;
