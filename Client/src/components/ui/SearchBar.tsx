import { IoIosSearch } from "react-icons/io";
import NavBarButton from "./NavBarButton";
import { useEffect, useRef, useState } from "react";
import { Product } from "@/interfaces/Product";
import { products } from "@/utils/dummy-data";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const filteredResults: Product[] = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    if (
      searchQuery.length > 0 &&
      filteredResults.length > 0 &&
      selectedIndex === -1
    ) {
      setSelectedIndex(0);
    }
    if (filteredResults.length === 0) {
      setSelectedIndex(-1);
    }
  }, [searchQuery, filteredResults, selectedIndex]);

  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur = (e: React.FocusEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.relatedTarget as Node)
    ) {
      setIsFocused(false);
      clearSearchQuery();
    }
  };

  const handleResultClick = (path: string) => {
    navigate(path);
    setIsFocused(false);
    clearSearchQuery();
    inputRef.current?.blur();
  };

  const clearSearchQuery = () => {
    setSearchQuery("");
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredResults.length - 1 ? prev + 1 : 0,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredResults.length - 1,
      );
    } else if (e.key === "Enter") {
      if (filteredResults.length > 0) {
        const selected =
          selectedIndex >= 0
            ? filteredResults[selectedIndex]
            : filteredResults[0];
        const link = `/products/${selected.category}/${selected.id}`;
        handleResultClick(link);
        inputRef.current?.blur();
      } else {
        navigate("/products/not-found");
      }
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <div className="z-[999] max-w-full lg:w-md">
        <input
          ref={inputRef}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSelectedIndex(-1); // Reset on new search
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          type="text"
          className="border-brand-200 focus:border-brand-900 w-full grow rounded-[22rem] border-3 bg-white p-4 py-2 transition-all focus:outline-none lg:p-4"
          placeholder="Search products..."
        />
        <NavBarButton to="/" bg="dark" variant="input" icon={<IoIosSearch />} />
      </div>
      {isFocused && searchQuery && filteredResults.length > 0 && (
        <ul className="absolute top-2 z-[-1] w-full rounded-3xl bg-white pt-10 xl:pt-14">
          {filteredResults.slice(0, 8).map((result, index) => (
            <li
              key={result.id}
              onMouseDown={() =>
                handleResultClick(`/products/${result.category}/${result.id}`)
              }
              className={`flex cursor-pointer rounded-3xl px-4 py-2 pt-6 pb-6 ${
                index === selectedIndex ? "bg-brand-50" : "hover:bg-brand-50"
              }`}
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
