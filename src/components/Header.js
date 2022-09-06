import Cart from "./Header/Cart";
import Logo from "./ResuedComponents/Logo/Logo";
import ProfileButton from "./Header/ProfileButton";
import Divider from "./Header/Divider";

import styles from "./Header.module.css";
import Menu from "./Header/Menu";
import GraySquare from "./ResuedComponents/GraySquare/GraySquare";

function Header() {
  return (
    <nav className={styles.navContainer}>
      <Logo />
      <div className={styles.excludeLogo}>
        <GraySquare>
          <Cart color={"#C7C8D2"} />
        </GraySquare>
        <ProfileButton />
        <Divider />
        <Menu />
      </div>
    </nav>
  );
}

export default Header;
