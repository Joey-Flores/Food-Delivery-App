import styles from "./FormChangeButtons.module.css";

function formChangeButtons() {
  return (
    <form className={styles.formChangeButtons}>
      <button className={styles.discardButton}>Discard changes</button>
      <button className={styles.saveButton}>Save changes</button>
    </form>
  );
}

export default formChangeButtons;
