import Cart from "./Header/Cart";
import Logo from "./ResuedComponents/Logo/Logo";
import ProfileButton from "./Header/ProfileButton";
import Divider from "./Header/Divider";

import styles from "./Header.module.css";
import Menu from "./Header/Menu";

function Header() {
  return (
    <nav className={styles.navContainer}>
      <Logo />
      <div className={styles.excludeLogo}>
        <Cart />
        <ProfileButton />
        <Divider />
        <Menu />
      </div>
    </nav>
  );
}

export default Header;
