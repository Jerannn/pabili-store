import { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helper";
import RadioButton from "../RadioButton";
import styles from "./ColorSelector.module.css";

function ColorSelector({ colors }) {
  const [color, setColor] = useState("");

  const handleColor = (c) => {
    setColor(c);
  };
  return (
    <ul className={styles.productColors}>
      {colors.map((c) => {
        const capitalizedColor = capitalizeFirstLetter(c);

        return (
          <RadioButton
            key={c}
            label={capitalizedColor}
            onHandleColor={handleColor}
          />
        );
      })}
    </ul>
  );
}

export default ColorSelector;
