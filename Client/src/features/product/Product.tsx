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
    <div className="px-16">
      <ProductBreadcrumb product={product} />
      <div className="grid grid-cols-2 gap-12">
        <ProductGallery product={product} />

        <ProductDetails product={product} />
      </div>
    </div>
  );
}

export default Product;
