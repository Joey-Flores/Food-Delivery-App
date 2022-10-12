import styles from "./ForgotPasswordPage.module.css";

function ForgotPasswordPage() {
  return (
    <form className={styles.forgotPwContainer}>
      <a href="#" className={styles.backButton}>
        <i className={styles.backArrow}></i>
        <span className={styles.buttonText}>Back to login</span>
      </a>
      <h2 className={styles.forgotPwTitle}>Forgot password</h2>
      <p>
        Enter the email associated with your account and we'll send an email
        with instructions to reset your password.
      </p>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email"></input>
      <button>Send instructions</button>
      <p className={styles.faq}>
        Do you have any questions? <a href="#">FAQ</a>
      </p>
    </form>
  );
}

export default ForgotPasswordPage;
