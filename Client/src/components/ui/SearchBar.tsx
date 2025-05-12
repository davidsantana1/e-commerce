import { IoIosSearch } from "react-icons/io";
import NavBarButton from "./NavBarButton";
import { useRef, useState } from "react";
import { Product } from "@/interfaces/Product";
import { products } from "@/utils/dummy-data";
import { useNavigate } from "react-router";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleBlur = (e: React.FocusEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.relatedTarget as Node)
    ) {
      setIsFocused(false);
    }
  };

  const handleResultClick = (path: string) => {
    navigate(path);
    setIsFocused(false);
    setSearchQuery("");
  };

  const filteredResults: Product[] = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) && product,
  );

  return (
    <div className="relative" ref={containerRef}>
      <div className="z-[999] max-w-full lg:w-md">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          type="text"
          className="border-brand-200 focus:border-brand-900 w-full grow rounded-[22rem] border-3 bg-white p-4 py-2 transition-all focus:outline-none lg:p-4"
          placeholder="Search products..."
        />
        {/* TODO */}
        <NavBarButton to="/" bg="dark" variant="input" icon={<IoIosSearch />} />
      </div>
      {isFocused && searchQuery && filteredResults.length > 0 && (
        <ul className="absolute top-2 z-[-1] w-full rounded-3xl bg-white pt-10 xl:pt-14">
          {filteredResults &&
            filteredResults.slice(0, 8).map((result) => (
              <li
                key={result.id}
                onMouseDown={() =>
                  handleResultClick(`/products/${result.category}/${result.id}`)
                }
                className="hover:bg-brand-50 flex cursor-pointer rounded-3xl px-4 py-2 pt-6 pb-6"
                tabIndex={-1}
              >
                {result.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
