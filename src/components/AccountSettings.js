import { useState } from "react";

import Header from "./Header";
import Wrapper from "./ResuedComponents/Wrapper/Wrapper";
import styles from "./AccountSettings.module.css";
import SettingsButton from "./AccountSettings/SettingsButton";
import Account from "./AccountSettings/Tabs/Account/Account";
import Address from "./AccountSettings/Tabs/Address/Address";

function AccountSettings() {
  const [selectedName, setSelectedName] = useState("account");

  function handleButtonClick(e) {
    if (e.target.name === selectedName) {
      return;
    }
    setSelectedName(e.target.name);
  }

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
          <div
            className={styles.settingsButtonsContainer}
            onClick={handleButtonClick}
          >
            <SettingsButton
              icon={"fa-solid fa-user"}
              btnTitle={"Account"}
              btnDesc={"Personal Information"}
              name={"account"}
              selected={selectedName}
            />
            <SettingsButton
              icon={"fa-solid fa-location-dot"}
              btnTitle={"Address"}
              btnDesc={"Shippings addresses"}
              name={"address"}
              selected={selectedName}
            />
            <SettingsButton
              icon={"fa-regular fa-credit-card"}
              btnTitle={"Payment method"}
              btnDesc={"Connect credit cards"}
              name={"payment"}
              selected={selectedName}
            />
            <SettingsButton
              icon={"fa-solid fa-shield"}
              btnTitle={"Security"}
              btnDesc={"Password, 2FA"}
              name={"security"}
              selected={selectedName}
            />
          </div>
        </div>
        {/* <Account /> */}
        <Address />
      </Wrapper>
    </>
  );
}

export default AccountSettings;
