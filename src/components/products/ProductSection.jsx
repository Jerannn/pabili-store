import styles from "./ProductSection.module.css";
import ProductList from "./ProductList.jsx";
import { useProduct } from "../../contexts/product/useProduct.js";
import Spinner from "../Spinner.jsx";
function ProductSection() {
  const { isLoading } = useProduct();

  if (isLoading) return <Spinner />;

  return (
    <section className={styles.productSection}>
      <ProductList />
    </section>
  );
}

export default ProductSection;
