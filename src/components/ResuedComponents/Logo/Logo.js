import styles from "./Logo.module.css";

function Logo(props) {
  return (
    <div className={styles.logo}>
      <h1
        className={
          props.footer ? `${styles.logoTop} ${styles.footer}` : styles.logoTop
        }
      >
        Food
      </h1>
      <h1 className={styles.logoBottom}>delivery</h1>
    </div>
  );
}

export default Logo;
