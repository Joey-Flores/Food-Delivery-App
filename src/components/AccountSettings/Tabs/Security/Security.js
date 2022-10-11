import styles from "./Security.module.css";

function Security() {
  return (
    <div className={styles.securityContainer}>
      <h4>Security</h4>
      <div className={styles.securityCardContainer}>
        <h5>2 factor authentication</h5>
        <form className={styles.phoneForm}>
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          ></input>
          <button>Turn on</button>
        </form>
        <h5>Change password</h5>
        <form className={styles.passwordResetForm}>
          <label htmlFor="currentPassword">Current password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            placeholder="Enter current Password"
          ></input>
          <label htmlFor="newPassword">New password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Enter new Password"
          ></input>
          <label htmlFor="confirmNewPassword">Confirm new password</label>
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            placeholder="Confirm new password"
          ></input>
          <button disabled>Change password</button>
        </form>
      </div>
    </div>
  );
}

export default Security;
