import styles from "./Checkbox.module.css";

function Checkbox() {
  return (
    <div className={styles.checkboxContainer}>
      <input className={styles.checkbox} type="checkbox"></input>
      <span className={styles.checkMark}></span>
    </div>
  );
}

export default Checkbox;
