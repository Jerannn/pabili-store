import styles from "./RadioButton.module.css";
function RadioButton({ label }) {
  return (
    <div className={styles.radioButton}>
      <input id="example-4" type="radio" name="radio-examples" />
      <label htmlFor="example-4">{label}</label>
    </div>
  );
}

export default RadioButton;
