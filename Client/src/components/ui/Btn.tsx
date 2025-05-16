import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const buttonVariants = cva(
  "text-brand-50 font-md  cursor-pointer rounded-xl px-5 py-3",
  {
    variants: {
      variant: {
        primary: "bg-brand-500 hover:bg-brand-600",
        secondary: "bg-secondary-500 text-secondary-50 hover:bg-secondary-600",
        outline:
          "border border-brand-500 text-brand-500 bg-transparent hover:bg-brand-600",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-3 text-base",
        lg: "px-6 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface BtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

function Btn({ className, children, variant, size, ...props }: BtnProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Btn;
