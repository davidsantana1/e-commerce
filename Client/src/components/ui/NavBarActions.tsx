import { IoCart, IoHeart } from "react-icons/io5";
import NavBarButton from "./NavBarButton";
import ProfileButton from "./ProfileButton";

function NavBarActions() {
  return (
    <div className="flex items-center gap-2">
      <NavBarButton to="/cart" bg="light" icon={<IoCart />} />
      <NavBarButton
        to="/wishlist"
        className="!text-red-500"
        bg="light"
        icon={<IoHeart />}
      />
      <ProfileButton />
    </div>
  );
}

export default NavBarActions;
