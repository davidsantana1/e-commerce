import { Product } from "@/interfaces/Product";
import { products } from "@/utils/dummy-data";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProduct(id: string) {
  return products.find((product) => product.id === +id);
}

export function getProducts(category: string | undefined) {
  if (category === undefined) return [];
  if (category === "all-products") return products;
  if (category === "wishlisted")
    return products.filter((product) => product.isWishlisted && product);

  return products.filter((product) => product.category === category);
}

export function getCategories() {
  const categories = products
    .filter((product) => product.category)
    .map((product) => product.category);

  return [...new Set(categories)];
}

export function replaceDashesWithSpaces(str: string | undefined) {
  if (str === undefined) return "";
  return str.replace(/-/g, " ");
}

export function truncateName(name: string, maxLength: number = 20): string {
  return name.length > maxLength
    ? name.slice(0, maxLength).trim() + "..."
    : name;
}

export function getSortedProducts(products: Product[], sortType: string) {
  const sorted = [...products];

  switch (sortType) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    default:
      return products;
  }
}
