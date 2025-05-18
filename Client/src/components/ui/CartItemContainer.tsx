import { ChildrenProps } from "@/interfaces/ChildrenProps";

interface CartItemContainerProps extends ChildrenProps {
  isWishlist?: boolean;
}

function CartItemContainer({
  isWishlist = false,
  children,
}: CartItemContainerProps) {
  return (
    <div
      className={`${isWishlist ? "xl:grid-cols-6" : "xl:grid-cols-5"} mx-auto grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-4`}
    >
      {children}
    </div>
  );
}

export default CartItemContainer;
