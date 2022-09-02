import GraySquare from "../ResuedComponents/GraySquare/GraySquare";
import styles from "../ResuedComponents/GraySquare/GraySquare.module.css";

function Menu() {
  return (
    <GraySquare className={`${styles.small}`}>
      <span style={{ color: "gray" }}>
        <i class="fa-solid fa-bars"></i>
      </span>
    </GraySquare>
  );
}

export default Menu;
