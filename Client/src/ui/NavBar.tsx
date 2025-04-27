import Heading from "./Heading";
import SearchBar from "./SearchBar";
import NavBarActions from "./NavBarActions";

function NavBar() {
  return (
    <nav className="glass relative mb-5 items-center justify-between py-3 pr-4 pl-6 lg:flex lg:rounded-[22rem]">
      <div className="top-0 flex items-center justify-center gap-12 lg:flex-row lg:gap-8">
        <Heading tint="dark" as="h2" size="lg" weight="bold">
          Terranova
        </Heading>
        <SearchBar />
      </div>

      <NavBarActions />
    </nav>
  );
}

export default NavBar;
