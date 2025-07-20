import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";

function ProductItem({ product }) {
  return (
    <li className={styles.productItem}>
      <Link to={`product/${product.id}`} className={styles.productLink}>
        <figure>
          <img
            src={product.image}
            alt={product.name}
            className={styles.productImage}
          />
          <figcaption className={styles.flex}>
            <h2 className={styles.productName}>{product.name}</h2>
            <strong>₱ {product.price}</strong>
          </figcaption>
        </figure>
      </Link>

      <div className={styles.flex} aria-label="Product stats">
        <div>
          <span aria-label="Rating">⭐ {product.rating}</span>
          <small>(1000+ reviews)</small>
        </div>
        <div>
          <small>(3.4k+ sold)</small>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
