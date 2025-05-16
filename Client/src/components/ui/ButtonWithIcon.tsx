import { cloneElement, HTMLAttributes, ReactElement } from "react";
import { Link } from "react-router-dom";

interface ButtonWithIconProps extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactElement<{ size?: number; className?: string }>;
  size?: number;
  to: string;
}

function ButtonWithIcon({
  icon,
  size = 50,
  className,
  to,
  children,
}: ButtonWithIconProps) {
  return (
    <Link to={to}>
      <button
        className={
          (className ? className + " " : "") +
          "bg-brand-500 hover:bg-brand-700 hover:text-brand-100 text-brand-50 flex cursor-pointer items-center gap-3 rounded-[22rem] py-1 pr-1 pl-6 text-xl font-medium"
        }
      >
        {children}
        {cloneElement(icon, { size })}
      </button>
    </Link>
  );
}

export default ButtonWithIcon;
