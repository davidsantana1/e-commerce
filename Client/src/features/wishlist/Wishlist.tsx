import Heading from "@/components/ui/Heading";
import WishlistGrid from "./WishlistGrid";

function Wishlist() {
  return (
    <div className="pt-5 sm:pt-0">
      <Heading size="xxl" margin="lg" weight="bold">
        Your Wishlist
      </Heading>
      <WishlistGrid />
    </div>
  );
}

export default Wishlist;
