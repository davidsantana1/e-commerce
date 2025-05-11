import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const paragraphVariants = cva("lg:text-sm xl:text-base", {
  variants: {
    variant: {
      light: "text-brand-50",
      dark: "text-brand-975",
    },
    margin: {
      none: "",
      sm: "mb-3",
      md: "mb-4",
      lg: "mb-5",
    },
  },
  defaultVariants: {
    variant: "light",
    margin: "none",
  },
});

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

function Paragraph({
  className,
  variant,
  margin,
  children,
  ...props
}: ParagraphProps) {
  return (
    <p
      {...props}
      className={clsx(paragraphVariants({ variant, margin }), className)}
    >
      {children}
    </p>
  );
}

export default Paragraph;
