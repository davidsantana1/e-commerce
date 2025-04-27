import { cloneElement, HTMLAttributes, ReactElement } from "react";

interface ButtonWithIconProps extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactElement<{ size?: number; className?: string }>;
}

function ButtonWithIcon({ icon, className, children }: ButtonWithIconProps) {
  return (
    <div>
      <button className="bg-brand-500 hover:bg-brand-700 hover:text-brand-100 text-brand-50 flex cursor-pointer items-center gap-3 rounded-[22rem] py-1 pr-1 pl-6 text-xl font-medium">
        {children}
        {cloneElement(icon, { size: 50, className })}
      </button>
    </div>
  );
}

export default ButtonWithIcon;
