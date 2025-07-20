import styles from "./Spinner.module.css";
function Spinner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["lds-grid"]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Spinner;
