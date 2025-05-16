import { useParams } from "react-router";
import ProductBreadcrumb from "./ProductBreadcrumb";
import ProductGallery from "./ProductGallery";
import ProductNotFoundPage from "./ProductNotFoundPage";
import { getProduct } from "@/lib/utils";
import ProductDetails from "./ProductDetails";

function Product() {
  const { category, id } = useParams();

  if (category === undefined || id === undefined)
    return <ProductNotFoundPage />;

  const product = getProduct(id);

  if (!product) return null;

  return (
    <div className="pt-5 lg:pt-0 xl:px-16">
      <ProductBreadcrumb product={product} />
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-12">
        <ProductGallery product={product} />

        <ProductDetails product={product} />
      </div>
    </div>
  );
}

export default Product;
