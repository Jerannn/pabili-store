import { Link, useParams } from "react-router-dom";
import { useProduct } from "../contexts/product/useProduct";
import Spinner from "../components/Spinner";

import styles from "./ProductPage.module.css";

function ProductPage() {
  const { productId } = useParams();
  const { products, isLoading } = useProduct();

  console.log(isLoading);
  if (isLoading) return <Spinner />;
  const {
    name,
    price,
    size,
    rating,
    description,
    category,
    image,
    stock,
    variant,
  } = products.find((p) => String(p.id) === productId);

  return (
    <section className={styles.productContainer}>
      <div className={styles.productImageGrid}>
        <img src={image} alt="" srcset="" className={styles.topProductImage} />
        <div className={styles.bottomProductImages}>
          <img src={image} alt="" srcset="" className={styles.bottomImage} />
          <img src={image} alt="" srcset="" className={styles.bottomImage} />
          <img src={image} alt="" srcset="" className={styles.bottomImage} />
          <img src={image} alt="" srcset="" className={styles.bottomImage} />
          <img src={image} alt="" srcset="" className={styles.bottomImage} />
        </div>
      </div>
      <div className={styles.productDetails}>
        <h1 className={styles.productName}>{name}</h1>

        <div className={styles.ratings} role="img" aria-label="Product rating">
          ⭐⭐⭐⭐⭐ (4.0)
        </div>

        <p className={styles.price}>${price}</p>
      </div>
    </section>
  );
}

export default ProductPage;
