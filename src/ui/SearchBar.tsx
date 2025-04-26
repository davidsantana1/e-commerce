import { IoIosSearch } from "react-icons/io";
import NavBarButton from "./NavBarButton";

function SearchBar() {
  return (
    <div className="relative max-w-full lg:w-md">
      <input
        type="text"
        className="bg-brand-200 border-brand-200 focus:border-brand-900 w-full grow rounded-[22rem] border-3 p-4 py-2 transition-all focus:outline-none lg:p-4"
        placeholder="Search products..."
      />
      <NavBarButton variant="input" icon={<IoIosSearch />} />
    </div>
  );
}

export default SearchBar;
