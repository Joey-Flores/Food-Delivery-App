import styles from "./Account.module.css";
import i from "../../../../images/pngfind.com-ninja-png-536693.png";
import Checkbox from "../../../ResuedComponents/Checkbox/Checkbox";
import FormChangeButtons from "../../../ResuedComponents/FormChangeButtons/FormChangeButtons";

function Account() {
  return (
    <div className={styles.accountContainer}>
      <h4>Account</h4>
      <div className={styles.accountCardContainer}>
        <h5>Personal information</h5>
        <h6>Avatar</h6>
        <div className={styles.accountImageControls}>
          <img src={i}></img>
          <button className={styles.changeButton}>Change</button>
          <button className={styles.removeButton}>Remove</button>
        </div>
        <form>
          <div className={styles.personalInfo}>
            <div>
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" name="firstName"></input>
            </div>

            <div>
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" name="lastName"></input>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email"></input>
            </div>

            <div>
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" name="phone"></input>
            </div>
          </div>
          <div className={styles.checkboxesArea}>
            <h5>Email notifications</h5>
            <div className={styles.checkboxesContainer}>
              <div>
                <Checkbox />
                <label>New deals</label>
              </div>
              <div>
                <Checkbox />
                <label>New restaurants</label>
              </div>
              <div>
                <Checkbox />
                <label>Order statuses</label>
              </div>
              <div>
                <Checkbox />
                <label>Password changes</label>
              </div>
              <div>
                <Checkbox />
                <label>Special offers</label>
              </div>
              <div>
                <Checkbox />
                <label>Newsletter</label>
              </div>
            </div>
            <button className={styles.logoutButton}>Log out</button>
          </div>
        </form>
        <hr
          style={{
            height: "1px",
            backgroundColor: "#EDEEF2",
            border: "none",
            marginLeft: "-40px",
            width: "200%",
            marginBottom: "24px",
          }}
        ></hr>
        <FormChangeButtons />
      </div>
    </div>
  );
}

export default Account;
