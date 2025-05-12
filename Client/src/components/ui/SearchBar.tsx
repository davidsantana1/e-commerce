import { IoIosSearch } from "react-icons/io";
import NavBarButton from "./NavBarButton";
import { useState } from "react";
import { Product } from "@/interfaces/Product";
import { products } from "@/utils/dummy-data";
import { Link } from "react-router";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResults: Product[] = products.filter(
    (product) => product.name.toLowerCase().startsWith(searchQuery) && product,
  );

  return (
    <div className="relative">
      <div className="z-[999] max-w-full lg:w-md">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="border-brand-200 focus:border-brand-900 w-full grow rounded-[22rem] border-3 bg-white p-4 py-2 transition-all focus:outline-none lg:p-4"
          placeholder="Search products..."
        />
        <NavBarButton bg="dark" variant="input" icon={<IoIosSearch />} />
      </div>
      {searchQuery && filteredResults.length > 0 && (
        <ul className="absolute top-2 z-[-1] w-full rounded-3xl bg-white pt-10 xl:pt-14">
          {filteredResults &&
            filteredResults.map((result) => (
              <Link to={`/products/${result.category}/${result.id}`}>
                <li className="hover:bg-brand-50 flex cursor-pointer rounded-3xl px-4 py-2 pt-6 pb-6">
                  {result.name}
                </li>
              </Link>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
