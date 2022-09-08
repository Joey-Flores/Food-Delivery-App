import "./App.css";
import Categories from "./components/HomePage/Categories/Categories";
import Deals from "./components/HomePage/Deals/Deals";
import Header from "./components/Header";
import Restaurants from "./components/HomePage/Restaurants/Restaurants";

import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <hr
        style={{
          height: "1px",
          backgroundColor: "#EDEEF2",
          border: "none",
          margin: "0",
        }}
      ></hr>
      <Deals />
      <Categories />
      <Restaurants /> */}
      <LoginPage />
    </div>
  );
}

export default App;
