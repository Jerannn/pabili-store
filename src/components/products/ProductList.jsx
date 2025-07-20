import { useProduct } from "../../contexts/product/useProduct";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";

function ProductList() {
  const { products } = useProduct();
  return (
    <section className="products-container">
      <ul className={styles.productList}>
        {products.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </ul>
    </section>
  );
}

export default ProductList;
