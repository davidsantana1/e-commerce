import { InputHTMLAttributes, ReactElement } from "react";

interface ActionButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactElement | string;
}

function ActionButton({ children, ...props }: ActionButtonProps) {
  return (
    <input
      className="bg-brand-500 text-brand-50 font-md hover:bg-brand-700 hover:text-brand-100 ml-auto cursor-pointer rounded-xl px-8 py-2"
      type="submit"
      value={children?.toString()}
      {...props}
    />
  );
}

export default ActionButton;
