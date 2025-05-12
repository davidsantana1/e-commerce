import { IoArrowForwardCircle } from "react-icons/io5";
import ButtonWithIcon from "./ButtonWithIcon";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { ReactNode } from "react";

interface PromoBannerProps {
  linkTo: string;
  glassy?: boolean;
  headingText: ReactNode;
  description: string;
  ctaText: string;
  imgSrc: string;
  imgAlt: string;
}

function PromoBanner({
  linkTo,
  headingText,
  description,
  ctaText,
  imgSrc,
  imgAlt,
  glassy = true,
}: PromoBannerProps) {
  return (
    <div
      className={`relative flex flex-col p-8 px-0 pb-0 sm:row-span-8 lg:col-span-5 lg:row-span-2 lg:flex-row lg:overflow-hidden ${glassy ? "glass" : ""}`}
    >
      <div className="flex flex-col self-center pb-8">
        <Heading margin="md" size="xxl" weight="bold">
          {headingText}
        </Heading>
        <Paragraph margin="lg" variant="dark">
          {description}
        </Paragraph>
        <ButtonWithIcon to={linkTo} icon={<IoArrowForwardCircle />}>
          {ctaText}
        </ButtonWithIcon>
      </div>
      <img
        className="mx-auto max-h-[80vh] w-xs object-contain select-none lg:w-xs lg:self-auto"
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
  );
}

export default PromoBanner;
