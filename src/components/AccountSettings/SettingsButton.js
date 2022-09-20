import GraySquare from "../ResuedComponents/GraySquare/GraySquare";
import gsStyles from "../ResuedComponents/GraySquare/GraySquare.module.css";
import styles from "./SettingsButton.module.css";

function SettingsButton() {
  return (
    <div className={styles.buttonContainer}>
      <GraySquare className={`${gsStyles.xSmall}`}>
        <span style={{ color: "gray" }}>
          <i class="fa-solid fa-bars"></i>
        </span>
      </GraySquare>
    </div>
  );
}

export default SettingsButton;
