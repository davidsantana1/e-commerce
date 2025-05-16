import { Product } from "@/interfaces/Product";

interface ProductGalleryProps {
  product: Product;
}
function ProductGallery({ product }: ProductGalleryProps) {
  if (product === undefined) return null;

  const { imgSrc } = product;

  return (
    <div className="grid grid-rows-[auto_auto] lg:grid-cols-[0.2fr_1fr] lg:grid-rows-1 lg:gap-2">
      <div className="row-start-2 grid grid-cols-5 gap-2 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-5 [&>img]:aspect-square [&>img]:flex-1 [&>img]:justify-center [&>img]:object-cover lg:[&>img]:h-full">
        <img className="rounded-xl" src={imgSrc} alt="" />
        <img className="rounded-xl" src={imgSrc} alt="" />
        <img className="rounded-xl" src={imgSrc} alt="" />
        <img className="rounded-xl" src={imgSrc} alt="" />
        <img className="rounded-xl" src={imgSrc} alt="" />
      </div>
      <img
        src={imgSrc}
        className="mb-2 aspect-square rounded-xl object-cover lg:mb-0 lg:h-full"
        alt={product.name}
      />
    </div>
  );
}

export default ProductGallery;
