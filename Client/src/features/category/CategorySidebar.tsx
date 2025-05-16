import Heading from "@/components/ui/Heading";
import { getCategories, replaceDashesWithSpaces } from "@/lib/utils";
import { Link } from "react-router-dom";

function CategorySidebar() {
  const categories = getCategories();

  return (
    <div className="outline-brand-200 mb-5 rounded-md p-4 outline-2 lg:mb-0 lg:h-130">
      <ul className="divide-brand-300 flex flex-col gap-4 divide-y">
        <li className="capitalize">
          <Link to={`/products/all-products`}>
            <Heading weight="bold" as="h3">
              All Products
            </Heading>
          </Link>
        </li>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`${index === categories.length - 1 && "border-brand-300 border-b"} ml-3 capitalize`}
          >
            <Link to={`/products/${category}`}>
              <Heading weight="bold" as="h3">
                {replaceDashesWithSpaces(category)}
              </Heading>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategorySidebar;
