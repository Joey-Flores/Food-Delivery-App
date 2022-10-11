import Header from "./Header";
import Categories from "./HomePage/Categories/Categories";
import Deals from "./HomePage/Deals/Deals";
import Restaurants from "./HomePage/Restaurants/Restaurants";

function HomePage() {
  return (
    <div>
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

export default HomePage;
