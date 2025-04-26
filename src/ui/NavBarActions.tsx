import { IoCart, IoHeart } from "react-icons/io5";
import NavBarButton from "./NavBarButton";
import ProfileButton from "./ProfileButton";

function NavBarActions() {
  return (
    <div className="hidden items-center gap-2 lg:flex">
      <NavBarButton icon={<IoCart />} />
      <NavBarButton icon={<IoHeart />} />
      <ProfileButton />
    </div>
  );
}

export default NavBarActions;
