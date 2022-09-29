import GraySquare from "../ResuedComponents/GraySquare/GraySquare";
import gsStyles from "../ResuedComponents/GraySquare/GraySquare.module.css";
import styles from "./SettingsButton.module.css";

function SettingsButton(props) {
  return (
    <button
      name={props.name}
      className={
        props.selected === props.name
          ? `${styles.buttonContainer} ${styles.selected}`
          : styles.buttonContainer
      }
    >
      <GraySquare
        className={
          props.selected === props.name
            ? `${gsStyles.xSmall} ${gsStyles.selected}`
            : gsStyles.xSmall
        }
      >
        <span>
          <i class={props.icon}></i>
        </span>
      </GraySquare>
      <div>
        <p className={styles.buttonTitle}>{props.btnTitle}</p>
        <p className={styles.buttonDesc}>{props.btnDesc}</p>
      </div>
    </button>
  );
}

export default SettingsButton;
