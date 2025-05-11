import SearchBar from "./SearchBar";
import NavBarActions from "./NavBarActions";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className="lg:pb-22">
      <nav className="glass fixed z-[999] hidden w-full items-center justify-between px-10 py-3 md:flex">
        <div className="top-0 flex items-center justify-center gap-8">
          <Logo />
          <SearchBar />
        </div>
        <NavBarActions />
      </nav>
    </div>
  );
}

export default NavBar;
