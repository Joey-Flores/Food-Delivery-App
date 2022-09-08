import Wrapper from "../../ResuedComponents/Wrapper/Wrapper";
import styles from "./Categories.module.css";

let categoryOptions = [
  {
    name: "Pizza",
    img: "https://img.icons8.com/emoji/48/000000/pizza-emoji.png",
  },
  {
    name: "Burger",
    img: "https://img.icons8.com/emoji/48/000000/hamburger-emoji.png",
  },
  {
    name: "BBQ",
    img: "https://img.icons8.com/emoji/48/000000/cut-of-meat-emoji.png",
  },
  {
    name: "Sushi",
    img: "https://img.icons8.com/emoji/48/000000/sushi-emoji.png",
  },
  {
    name: "Vegan",
    img: "https://img.icons8.com/emoji/48/000000/broccoli-emoji.png",
  },
  {
    name: "Desserts",
    img: "https://img.icons8.com/emoji/48/000000/cupcake-emoji.png",
  },
];

function Categories() {
  return (
    <Wrapper className={styles.categoriesContainer}>
      {categoryOptions.map((category) => (
        <div className={styles.categoriesCard}>
          <img style={{ height: "24px" }} src={category.img} />
          <p>{category.name}</p>
        </div>
      ))}
    </Wrapper>
  );
}

export default Categories;
