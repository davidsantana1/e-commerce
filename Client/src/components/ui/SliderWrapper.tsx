import Heading from "@/components/ui/Heading";
import CardList from "./CardList";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import { useRef, useState, useEffect, ReactElement, cloneElement } from "react";

interface SliderWrapperProps {
  headingText: string;
  icon: ReactElement<{ size: number }>;
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

function SliderWrapper({ headingText, icon }: SliderWrapperProps) {
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
    <div>
      <div className="mb-4 flex items-center gap-2">
        {cloneElement(
          icon,
          icon.props?.size ? { ...icon.props } : { ...icon.props, size: 25 },
        )}
        <Heading weight="bold" size="xl">
          {headingText}
        </Heading>
      </div>

      <div className="group relative w-full">
        <div
          ref={scrollRef}
          className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-brand-700 scrollbar-track-brand-300 scrollbar-none group-hover:scrollbar h-full min-h-[calc(100%+18rem)] overflow-x-auto overflow-y-hidden pb-3 transition-all"
        >
          <CardList />
        </div>

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
      </div>
    </div>
  );
}

export default SliderWrapper;
