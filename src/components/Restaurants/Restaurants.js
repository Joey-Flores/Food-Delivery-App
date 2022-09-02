import Wrapper from "../ResuedComponents/Wrapper/Wrapper";
import styles from "./Restaurants.module.css";

function Restaurants() {
  return (
    <Wrapper>
      <h3 className={styles.restaurantTitle}>Nearby restaurants</h3>
      <div className={styles.restaurantCard}></div>
    </Wrapper>
  );
}

export default Restaurants;
