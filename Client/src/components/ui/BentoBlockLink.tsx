import { Link } from "react-router-dom";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { cloneElement, ReactElement } from "react";
import { IoArrowForwardCircle } from "react-icons/io5";

interface BentoBlockLinkProps {
  className: string;
  heading: string;
  paragraph: string;
  icon?: ReactElement<{ className: string; size: number }>;
  image: string;
  imageAlt: string;
  imageMargin?: string;
  colSpan?: string;
  rowSpan?: string;
  imageClassName: string;
  linkTo: string;
}

const iconClassName =
  "group-hover:text-brand-200 text-brand-50 absolute top-2 right-2";

const ICON_SIZE = 40;

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
  imageClassName,
  linkTo,
}: BentoBlockLinkProps) {
  return (
    <Link
      to={linkTo}
      className={`${className} ${rowSpan} ${colSpan} group relative cursor-pointer items-center rounded-3xl px-6 lg:flex`}
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
        <Paragraph className="mb-4 lg:mb-0">{paragraph}</Paragraph>
      </div>
      <img
        className={`${imageMargin} ${imageClassName} mx-auto object-cover`}
        src={image}
        alt={imageAlt}
      />
      {!icon && (
        <IoArrowForwardCircle
          size={ICON_SIZE}
          className={`${iconClassName} -rotate-45`}
        />
      )}
      {icon &&
        cloneElement(icon, {
          className: `${icon?.props?.className} ${iconClassName}`,
          size: ICON_SIZE,
        })}
    </Link>
  );
}

export default BentoBlockLink;
