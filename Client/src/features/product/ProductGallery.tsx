import { Product } from "@/interfaces/Product";

interface ProductGalleryProps {
  product: Product;
}
function ProductGallery({ product }: ProductGalleryProps) {
  if (product === undefined) return null;

  const { imgSrc } = product;

  return (
    <div className="grid grid-cols-[0.2fr_1fr] gap-2">
      <div className="grid grid-rows-5 gap-2 [&>img]:aspect-square [&>img]:object-cover">
        <img className="rounded-xl" src={imgSrc} alt="" />
        <img className="rounded-xl" src={imgSrc} alt="" />
        <img className="rounded-xl" src={imgSrc} alt="" />
        <img className="rounded-xl" src={imgSrc} alt="" />
        <img className="rounded-xl" src={imgSrc} alt="" />
      </div>
      <img
        src={imgSrc}
        className="aspect-square h-full rounded-xl object-cover"
        alt={product.name}
      />
    </div>
  );
}

export default ProductGallery;
