import styles from "./Deals.module.css";

function Deals() {
  return (
    <div className={styles.dealsContainer}>
      <div className={styles.dealsCard}>
        <div className={styles.dealsName}>
          <h3>All desserts</h3>
          <p>Desserty</p>
        </div>
        <h1>20% OFF</h1>
      </div>
      <div className={styles.dealsCard2}>
        <div className={styles.dealsName}>
          <h3>Big Burgers</h3>
          <p>Fooddies</p>
        </div>
        <h1>50% OFF</h1>
      </div>
    </div>
  );
}

export default Deals;
