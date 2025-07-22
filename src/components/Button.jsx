import styles from "./Button.module.css";

function Button({ label, isActive = false }) {
  return (
    <button className={`${styles.btn} ${isActive ? styles["active"] : ""}`}>
      {label}
    </button>
  );
}

export default Button;
