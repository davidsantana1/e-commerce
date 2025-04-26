import { cva, VariantProps } from "class-variance-authority";
import { cloneElement, HTMLAttributes, ReactElement } from "react";
import { cn } from "../utils/utils";

const navBarButtonVariants = cva(
  "aspect-square h-full cursor-pointer rounded-full lg:p-4 bg-brand-900",
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
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    },
  },
);

interface NavBarButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navBarButtonVariants> {
  icon: ReactElement<{ size?: number; className?: string }>;
}

function NavBarButton({ icon, variant, size, className }: NavBarButtonProps) {
  return (
    <button className={cn(navBarButtonVariants({ variant, size, className }))}>
      {cloneElement(icon, {
        size: 25,
        className: "justify-self-center text-white",
      })}
    </button>
  );
}

export default NavBarButton;
