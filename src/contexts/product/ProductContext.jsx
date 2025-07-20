import { createContext, useEffect, useState } from "react";
import fakeFetchingDelay from "../../utils/helper";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        const response = await fetch("/data/products.json");

        await fakeFetchingDelay(1000); // Fake delay

        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
