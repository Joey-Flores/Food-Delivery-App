import styles from "./GraySquare.module.css";

function GraySquare(props) {
  return (
    <div className={`${styles.graySquare} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default GraySquare;
