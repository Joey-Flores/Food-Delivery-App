import styles from "./Address.module.css";

function Address() {
  return (
    <div className={styles.addressContainer}>
      <h4>Address</h4>
      <div className={styles.addressCardContainer}>
        <h5>Shipping Address</h5>
        <form>
          <div>
            <label htmlFor="addressOne">Address 1</label>
            <input type="text" id="addressOne" name="addressOne"></input>
          </div>
          <div>
            <label htmlFor="addressTwo">Address 2</label>
            <input type="text" id="addressTwo" name="addressTwo"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Address;
