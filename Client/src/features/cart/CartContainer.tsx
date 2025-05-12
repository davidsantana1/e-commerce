import { ChildrenProps } from "@/interfaces/ChildrenProps";

function CartContainer({ children }: ChildrenProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.3fr]">{children}</div>
  );
}

export default CartContainer;
