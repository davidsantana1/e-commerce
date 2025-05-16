import { products } from "@/utils/dummy-data";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProduct(id: string) {
  return products.find((product) => product.id === +id);
}

export function replaceDashesWithSpaces(str: string) {
  return str.replace(/-/g, " ");
}
