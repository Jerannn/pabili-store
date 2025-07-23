import { Link, useParams } from "react-router-dom";
import { useProduct } from "../contexts/product/useProduct";
import Spinner from "../components/Spinner";

import styles from "./ProductPage.module.css";
import Button from "../components/Button";
import Ratings from "../components/Ratings";
import RadioButton from "../components/RadioButton";

import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

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
        <img src={image} alt="" className={styles.topProductImage} />
        <div className={styles.bottomProductImages}>
          <img src={image} alt="" className={styles.bottomImage} />
          <img src={image} alt="" className={styles.bottomImage} />
          <img src={image} alt="" className={styles.bottomImage} />
          <img src={image} alt="" className={styles.bottomImage} />
          <img src={image} alt="" className={styles.bottomImage} />
        </div>
      </div>

      <div className={styles.productDetails}>
        <h1 className={styles.productName}>{name}</h1>

        <div className={styles.ratings} role="img" aria-label="Product rating">
          <Ratings />
          <span className={styles.ratingsValue}>(4.9)</span>
        </div>

        <p className={styles.price}>${price}</p>

        <div className={styles.options}>
          <section className={styles.productAvailableSizes}>
            <h3 className={styles.label}>Available Size</h3>
            <ul className={styles.sizeList}>
              <Button label="S" isActive={true} />
              <Button label="M" />
              <Button label="L" />
              <Button label="XL" />
            </ul>
          </section>

          <section className="productAvailableColors">
            <h3 className={styles.label}>Available Color</h3>
            <ul className={styles.productColors}>
              <RadioButton label="Red" />
              <RadioButton label="White" />
              <RadioButton label="Beige" />
              <RadioButton label="Navy" />
            </ul>
          </section>
        </div>

        <div className={styles.productQuantity}>
          <div className={styles.counter}>
            <button className={styles.counterBtn}>
              <FiMinus size={20} className={styles.thinIcon} />
            </button>
            <span className={styles.counterValue}>1</span>
            <button className={styles.counterBtn}>
              <FiPlus size={20} className={styles.thinIcon} />
            </button>
          </div>
          <h3 className={styles.label}>5 stock left</h3>
        </div>

        <Button label="Add to cart" isActive={true} padding="md" />
      </div>
    </section>
  );
}

export default ProductPage;
