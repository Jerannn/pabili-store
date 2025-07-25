import styles from "./RadioButton.module.css";
function RadioButton({ label }) {
  return (
    <div className={styles.radioButton}>
      <input id={label} type="radio" name="radio-examples" />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default RadioButton;
