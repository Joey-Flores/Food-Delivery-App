import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <div className={styles.loginFormContainer}>
      <h1>Login</h1>
      <p>Sign in with your data that you entered during your registration.</p>

      <form className={styles.loginForm}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="name@example.com"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="min. 8 characters"
        ></input>
        <div className={styles.loginFormCheckbox}>
          <input type="checkbox"></input>
          <span className={styles.checkMark}></span>
          <p>Keep me logged in</p>
        </div>
        <button>Login</button>
        <a className={styles.forgotPassword} href="#">
          Forgot password
        </a>
        <p className={styles.signUp}>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
