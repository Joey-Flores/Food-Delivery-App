import Cart from "../Header/Cart";
import Wrapper from "../ResuedComponents/Wrapper/Wrapper";
import styles from "./Restaurants.module.css";

let imgs = [
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
  },
];

function Restaurants() {
  return (
    <Wrapper>
      <h2 className={styles.restaurantTitle}>Nearby restaurants</h2>
      <div className={styles.restaurantCardContainer}>
        {imgs.map((image) => (
          <div className={styles.restaurantCard}>
            <img src={image.img}></img>
            <div className={styles.restaurantCardBottomSection}>
              <div className={styles.restaurantInfo}>
                <h3>Burgers & Pizza</h3>
                <div className={styles.timeAndPrice}>
                  <span style={{ color: "#C7C8D2", marginTop: "1px" }}>
                    <i class="fa-regular fa-clock fa-2xs"></i>
                  </span>
                  <p>
                    40-60 min
                    <span
                      style={{
                        color: "#4E60FF",
                        fontSize: "8px",
                        padding: "0 8px",
                      }}
                    >
                      &#8226;
                    </span>
                    $32 min sum
                  </p>
                </div>
                <span className={styles.cardCart}>
                  <Cart color={"#4E60FF"} />
                </span>
              </div>
              <div className={styles.categoryBadgeContainer}>
                <div className={styles.categoryBadge}>
                  <img src="https://img.icons8.com/emoji/48/000000/sushi-emoji.png" />
                  <p>Sushi</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Restaurants;
