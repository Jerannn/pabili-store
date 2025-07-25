import { useState } from "react";
import styles from "./QuantityCounter.module.css";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

function QuantityCounter() {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityDecrease = () => setQuantity((q) => (q > 0 ? q - 1 : 0));
  const handleQuantityIncrease = () => setQuantity((q) => q + 1);

  return (
    <div className={styles.counter}>
      <button className={styles.counterBtn} onClick={handleQuantityDecrease}>
        <FiMinus size={20} className={styles.thinIcon} />
      </button>
      <span className={styles.counterValue}>{quantity}</span>
      <button className={styles.counterBtn} onClick={handleQuantityIncrease}>
        <FiPlus size={20} className={styles.thinIcon} />
      </button>
    </div>
  );
}

export default QuantityCounter;
