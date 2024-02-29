import React from "react";
import Navbar from "./components/Navbar";
import CategoryList from "./components/CategoryList";
import Products from "./components/Products";
import "./styles/App.scss";

const App = () => {
  //code below
  const slideFunction = () => {
    const slideElement = document.querySelector(".slider-container");
    slideElement.classList.add("slide-right");
  };



  return (
    <div className="app-container">
      <Navbar slideFunction={slideFunction} />
      <CategoryList />
      <Products />
    </div>
  );
};

export default App;
