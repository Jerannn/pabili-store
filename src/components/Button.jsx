import styles from "./Button.module.css";

function Button({
  label,
  isActive = false,
  padding = "sm",
  onClick = () => {},
}) {
  return (
    <button
      className={`${styles.btn} ${styles[`padding--${padding}`]} ${
        isActive ? styles["active"] : ""
      }`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Button;
