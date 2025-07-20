import AppLayout from "./components/layout/AppLayout";
import { ProductProvider } from "./contexts/product/ProductContext";

function App() {
  return (
    <>
      <ProductProvider>
        <AppLayout />
      </ProductProvider>
    </>
  );
}

export default App;
