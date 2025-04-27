import SearchBar from "./SearchBar";
import NavBarActions from "./NavBarActions";
import Logo from "./Logo";

function NavBar() {
  return (
    <nav className="glass relative mb-5 items-center justify-between py-3 pr-4 pl-6 lg:flex lg:rounded-[22rem]">
      <div className="top-0 flex items-center justify-center gap-12 lg:flex-row lg:gap-8">
        <Logo />
        <SearchBar />
      </div>

      <NavBarActions />
    </nav>
  );
}

export default NavBar;
