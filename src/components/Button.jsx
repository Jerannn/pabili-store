import styles from "./Button.module.css";

function Button({ label, isActive = false, padding = "sm" }) {
  return (
    <button
      className={`${styles.btn} ${styles[`padding--${padding}`]} ${
        isActive ? styles["active"] : ""
      }`}
    >
      {label}
    </button>
  );
}

export default Button;
