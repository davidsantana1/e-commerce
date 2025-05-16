import Heading from "@/components/ui/Heading";
import NotFoundPage from "@/components/ui/NotFoundPage";
import {
  getProducts,
  getSortedProducts,
  replaceDashesWithSpaces,
} from "@/lib/utils";
import { useParams } from "react-router-dom";
import CategorySidebar from "./CategorySidebar";
import CategoryGrid from "./CategoryGrid";
import Sort from "@/components/ui/Sort";
import { useState } from "react";

function Category() {
  const { category } = useParams();
  const [sort, setSort] = useState("default");

  function handleSetSort(sortType: string) {
    setSort(sortType);
  }

  const products = getProducts(category);
  const sortedProducts = getSortedProducts(products, sort);

  if (products.length === 0) return <NotFoundPage pageName="Category" />;

  return (
    <div className="min-h-screen pt-5 sm:pt-0">
      <div className="mb-6 flex flex-col items-center justify-between sm:flex-row">
        <Heading size="xxl" weight="bold" className="mb-2 capitalize sm:mb-0">
          {replaceDashesWithSpaces(category)}
        </Heading>
        <div className="flex items-center gap-2">
          <Sort sort={sort} handleSetSort={handleSetSort} />
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.2fr_1fr]">
        <CategorySidebar />
        <CategoryGrid products={sortedProducts} />
      </div>
    </div>
  );
}

export default Category;
