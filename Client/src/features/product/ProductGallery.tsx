import { Product } from "@/interfaces/Product";
import { useEffect, useState } from "react";

interface ProductGalleryProps {
  product: Product;
}

function ProductGallery({ product }: ProductGalleryProps) {
  const { images } = product;
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  if (!product) return null;

  return (
    <div className="grid grid-rows-[auto_auto] lg:grid-cols-[0.2fr_1fr] lg:grid-rows-1 lg:gap-2">
      <div className="row-start-2 grid grid-cols-5 gap-2 lg:row-start-1 lg:grid-cols-1 lg:grid-rows-5">
        {images.map((image, index) => {
          const isHovered = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <img
              key={index}
              src={image}
              alt={product.name}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setSelectedImage(image);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`aspect-square cursor-pointer rounded-xl object-cover transition-opacity duration-200 lg:h-full ${
                isHovered ? "opacity-50" : "opacity-100"
              }`}
            />
          );
        })}
      </div>
      <img
        src={selectedImage}
        className="mb-2 aspect-square rounded-xl object-cover lg:mb-0 lg:h-full"
        alt={product.name}
      />
    </div>
  );
}

export default ProductGallery;
