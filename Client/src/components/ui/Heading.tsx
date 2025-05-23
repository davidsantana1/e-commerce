import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@/utils/utils";

const headingVariants = cva("", {
  variants: {
    variant: {
      default: "",
      secondary: "",
    },
    size: {
      default: "text-xl",
      sm: "text-sm",
      md: "text-base",
      lg: "text-2xl xl:text-2xl lg:text-sm",
      xl: "text-3xl",
      xxl: "text-4xl",
      xxxl: "text-5xl",
      xxxxl: "text-6xl",
    },
    weight: {
      default: "font-normal",
      md: "font-medium",
      bold: "font-bold",
    },
    tint: {
      light: "text-brand-50",
      dark: "text-brand-975",
    },
    margin: {
      sm: "mb-2",
      md: "mb-5",
      lg: "mb-7",
      xl: "mb-9",
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      weight: "bold",
      tint: "light",
      margin: "md",
    },
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4";

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingTag;
}

function Heading({
  children,
  as: Tag = "h1",
  className,
  size,
  variant,
  weight,
  margin,
  tint,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        headingVariants({ variant, size, margin, weight, tint, className }),
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Heading;
