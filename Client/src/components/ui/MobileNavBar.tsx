import SearchBar from "./SearchBar";
import NavBarActions from "./NavBarActions";
import Logo from "./Logo";

function MobileNavBar() {
  return (
    <div className="pb-26 lg:pb-0">
      <nav className="glass fixed z-[999] mb-5 w-full items-center justify-between py-3 pr-4 pl-6 md:hidden">
        <div className="top-0 mb-3 flex items-center justify-between gap-3 lg:gap-8">
          <Logo />
          <NavBarActions />
        </div>
        <SearchBar />
      </nav>
    </div>
  );
}

export default MobileNavBar;
