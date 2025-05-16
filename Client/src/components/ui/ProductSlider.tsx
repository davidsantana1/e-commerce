import Heading from "@/components/ui/Heading";
import CardList from "./CardList";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import { useRef, useState, useEffect, ReactElement, cloneElement } from "react";
import { Product } from "@/interfaces/Product";
import { Link } from "react-router-dom";

interface ProductSliderProps {
  headingText: string;
  icon: ReactElement<{ size: number }>;
  products: Product[];
  categoryName: string;
}

interface ArrowButtonProps {
  direction: "left" | "right";
  atStart: boolean;
  atEnd: boolean;
  scroll: (direction: "left" | "right") => void;
}

const ArrowButton = ({
  direction,
  atStart,
  atEnd,
  scroll,
}: ArrowButtonProps) => {
  const isLeft = direction === "left";
  const isAtLimit = isLeft ? atStart : atEnd;

  return (
    <div
      onClick={() => !isAtLimit && scroll(direction)}
      className={`absolute top-1/2 ${isLeft ? "left-0" : "right-0"} -translate-y-[175%] text-4xl opacity-50 transition-all hover:opacity-100 ${
        isAtLimit
          ? "cursor-not-allowed text-slate-500"
          : "text-secondary-500 hover:text-secondary-600 cursor-pointer"
      }`}
    >
      {isLeft ? <IoArrowBackCircle /> : <IoArrowForwardCircle />}
    </div>
  );
};

function ProductSlider({
  headingText,
  products,
  icon,
  categoryName,
}: ProductSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  const updateButtonState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const tolerance = 5;
    setAtStart(el.scrollLeft <= tolerance);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - tolerance);
    setIsScrollable(el.scrollWidth > el.clientWidth + tolerance);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      setTimeout(updateButtonState, 300);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const timeout = setTimeout(() => updateButtonState(), 100);
    el.addEventListener("scroll", updateButtonState);

    return () => {
      clearTimeout(timeout);
      el.removeEventListener("scroll", updateButtonState);
    };
  }, []);

  useEffect(() => {
    updateButtonState();
  }, [products.length]);

  return (
    <div>
      <div className="flex">
        <Link
          className="mb-4 flex items-center gap-2"
          to={`/products/${categoryName}`}
        >
          {cloneElement(
            icon,
            icon.props?.size ? { ...icon.props } : { ...icon.props, size: 25 },
          )}
          <Heading weight="bold" size="xl">
            {headingText}
          </Heading>
        </Link>
      </div>

      <div className="group relative w-full">
        <div
          ref={scrollRef}
          className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-brand-700 scrollbar-track-brand-300 scrollbar-none group-hover:scrollbar xs:min-h-[calc(100%+18rem)] mb-3 h-full overflow-x-auto overflow-y-hidden pb-3 transition-all lg:mb-0"
        >
          <CardList products={products} />
        </div>

        {isScrollable && (
          <>
            <ArrowButton
              direction="left"
              atStart={atStart}
              atEnd={atEnd}
              scroll={scroll}
            />
            <ArrowButton
              direction="right"
              atStart={atStart}
              atEnd={atEnd}
              scroll={scroll}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ProductSlider;
