import Logo from "./ResuedComponents/Logo/Logo";
import Wrapper from "./ResuedComponents/Wrapper/Wrapper";
import styles from "./LoginPage.module.css";
import LoginForm from "./LoginPage/LoginForm";

function LoginPage() {
  return (
    <Wrapper className={styles.loginPageWrapper}>
      <Logo />
      <LoginForm />
    </Wrapper>
  );
}

export default LoginPage;
