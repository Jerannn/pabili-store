import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export function useProduct() {
  const context = useContext(ProductContext);

  if (context === undefined)
    throw new Error("ProductContext was used outside of the Provider!");

  return context;
}
