import { cva, VariantProps } from "class-variance-authority";
import { cloneElement, HTMLAttributes, ReactElement } from "react";
import { cn } from "../utils/utils";

const navBarButtonVariants = cva(
  "aspect-square h-full cursor-pointer rounded-full lg:p-4",
  {
    variants: {
      variant: {
        default: "",
        secondary: "",
        input: "absolute right-0",
      },
      size: {
        default: "text-xl",
        sm: "text-sm",
        md: "text-base",
        lg: "text-2xl",
        xl: "text-3xl",
      },
      bg: {
        light: "bg-brand-50 hover:bg-brand-200 text-brand-900",
        dark: "bg-brand-900 hover:bg-brand-700 text-brand-50",
      },
      defaultVariants: {
        variant: "default",
        size: "default",
        bg: "dark",
      },
    },
  },
);

interface NavBarButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navBarButtonVariants> {
  icon: ReactElement<{ size?: number; className?: string }>;
}

function NavBarButton({
  icon,
  variant,
  size,
  bg,
  className,
}: NavBarButtonProps) {
  return (
    <button
      className={cn(navBarButtonVariants({ variant, bg, size, className }))}
    >
      {cloneElement(icon, {
        size: 25,
        className: "justify-self-center",
      })}
    </button>
  );
}

export default NavBarButton;
