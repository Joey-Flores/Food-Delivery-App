import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoContainer}>
        <Logo footer={true} />
      </div>
      <div className={styles.socialsContainer}>
        <div className={styles.circle}>
          <span>
            <i className="fa-brands fa-facebook-f fa-xl"></i>
          </span>
        </div>
        <div className={styles.circle}>
          <span>
            <i className="fa-brands fa-twitter fa-xl"></i>
          </span>
        </div>
        <div className={styles.circle}>
          <span>
            <i className="fa-brands fa-instagram fa-xl"></i>
          </span>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.footerContents}>
          <ul className={styles.footerList}>
            <li>
              <h4>Responses</h4>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Guarantee</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>

          <ul className={styles.footerList}>
            <li>
              <h4>Company</h4>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Prices</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">License</a>
            </li>
          </ul>

          <ul className={styles.footerList}>
            <li>
              <h4>Support</h4>
            </li>
            <li>
              <a href="#">Getting started</a>
            </li>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Report a bug</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>

          <p>&copy; 2022 Food delivery kit. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
