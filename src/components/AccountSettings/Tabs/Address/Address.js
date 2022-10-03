import styles from "./Address.module.css";
import FormChangeButtons from "../../../ResuedComponents/FormChangeButtons/FormChangeButtons";

function Address() {
  return (
    <div className={styles.addressContainer}>
      <h4>Address</h4>
      <div className={styles.addressCardContainer}>
        <h5>Shipping Address</h5>
        <form>
          <div>
            <label htmlFor="streetAddress"></label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              placeholder="Street Address"
            ></input>
          </div>
          <div>
            <label htmlFor="addressTwo"></label>
            <input
              type="text"
              id="addressTwo"
              name="addressTwo"
              placeholder="Apt, suite, etc (optional)"
            ></input>
          </div>
          <div>
            <div>
              <label htmlFor="zipcode"></label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                placeholder="zipcode"
              ></input>
            </div>
            <div>
              <label htmlFor="city"></label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="city"
              ></input>
            </div>
            <div>
              <select id="state" name="state" defaultValue="state">
                <option value="state" disabled>
                  State
                </option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
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

export default Address;
