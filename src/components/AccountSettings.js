import Header from "./Header";
import Wrapper from "./ResuedComponents/Wrapper/Wrapper";
import styles from "./AccountSettings.module.css";
import SettingsButton from "./AccountSettings/SettingsButton";
import Account from "./AccountSettings/Tabs/Account";

function AccountSettings() {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <hr
        style={{
          height: "1px",
          backgroundColor: "#EDEEF2",
          border: "none",
          marginLeft: "0",
          marginBottom: "24px",
        }}
      ></hr>
      <Wrapper>
        <div className={styles.settingsContainer}>
          <h4>Settings</h4>
          <div className={styles.settingsButtonsContainer}>
            <SettingsButton />
            <SettingsButton />
            <SettingsButton />
            <SettingsButton />
          </div>
        </div>
        <Account />
      </Wrapper>
    </>
  );
}

export default AccountSettings;
