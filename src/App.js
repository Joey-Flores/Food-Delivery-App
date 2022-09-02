import "./App.css";
import Categories from "./components/Categories/Categories";
import Deals from "./components/Deals/Deals";
import Header from "./components/Header";
import Restaurants from "./components/Restaurants/Restaurants";

function App() {
  return (
    <div className="App">
      <Header />
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
      <Restaurants />
    </div>
  );
}

export default App;
