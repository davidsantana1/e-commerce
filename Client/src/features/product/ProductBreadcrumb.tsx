import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@/interfaces/Product";
import { replaceDashesWithSpaces } from "@/lib/utils";
import { Link } from "react-router";

interface ProductBreadcrumbProps {
  product: Product;
}

function ProductBreadcrumb({ product }: ProductBreadcrumbProps) {
  const { category } = product;

  if (!product) return null;

  const { name } = product;

  return (
    <Breadcrumb className="mb-5">
      <BreadcrumbList className="text-xl font-bold">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:size-5" />
        <BreadcrumbItem>
          <BreadcrumbLink className="cursor-pointer capitalize" asChild>
            <Link to={`/products/${category}`}>
              {replaceDashesWithSpaces(category)}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:size-5" />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-bold">{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default ProductBreadcrumb;
