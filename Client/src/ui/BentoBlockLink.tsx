import { Link } from "react-router";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { cloneElement, ReactElement } from "react";

interface BentoBlockLinkProps {
  className: string;
  heading: string;
  paragraph: string;
  icon: ReactElement<{ className: string; size: number }>;
  image: string;
  imageAlt: string;
  imageMargin?: string;
  colSpan?: string;
  rowSpan?: string;
}

function BentoBlockLink({
  className,
  heading,
  paragraph,
  image,
  imageAlt,
  imageMargin,
  colSpan = "lg:col-span-5",
  rowSpan = "lg:row-span-1",
  icon,
}: BentoBlockLinkProps) {
  return (
    <Link
      to="/products/clothes"
      className={
        (className ? className + " " : "") +
        (rowSpan ? rowSpan + " " : "") +
        (colSpan ? colSpan + " " : "") +
        "group relative h-[10.4rem] cursor-pointer items-center rounded-3xl p-8 pb-0 lg:flex lg:pb-8"
      }
    >
      <div>
        <Heading
          className="flex items-center gap-3"
          size="lg"
          weight="bold"
          tint="light"
          margin="sm"
        >
          {heading}
        </Heading>
        <Paragraph margin="md">{paragraph}</Paragraph>
      </div>
      <img
        className={
          (imageMargin ? imageMargin + " " : "") +
          "left-[73%] mx-auto w-64 object-cover lg:max-w-50"
        }
        src={image}
        alt={imageAlt}
      />
      {cloneElement(icon, {
        className:
          icon?.props?.className +
          " group-hover:text-brand-200 text-brand-50 absolute top-2 right-2 ",
        size: 40,
      })}
    </Link>
  );
}

export default BentoBlockLink;
