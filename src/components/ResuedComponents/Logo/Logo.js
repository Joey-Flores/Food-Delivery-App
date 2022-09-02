import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <h1 className={styles.logoTop}>Food</h1>
      <h1 className={styles.logoBottom}>delivery</h1>
    </div>
  );
}

export default Logo;
