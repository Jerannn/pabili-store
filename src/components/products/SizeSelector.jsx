import { useState } from "react";
import Button from "../Button";
import styles from "./SizeSelector.module.css";

function SizeSelector({ sizes }) {
  const [size, setSize] = useState("");

  const handleSize = (s) => setSize(s);

  return (
    <ul className={styles.sizeList}>
      {sizes.map((s) => (
        <Button
          key={s}
          label={s.toUpperCase()}
          isActive={size === s.toUpperCase()}
          onClick={handleSize}
        />
      ))}
    </ul>
  );
}

export default SizeSelector;
