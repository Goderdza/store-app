import React from "react";
import "../styles/CategoryList.scss";

const CategoryList = () => {

  const removeSlideFunction = () => {
    const slideElement = document.querySelector(".slider-container");
    slideElement.classList.remove("slide-right");
  };
  return (
    <div className="slider-container">
      <div className="exit-btn">
        <button onClick={removeSlideFunction}>X</button>
      </div>
      <div className="category-list">
        <ul>
          <li>Home & Furniture</li>
          <li>Clothes</li>
          <li>Food</li>
          <li>Pharmacy</li>
          <li>Baby Care</li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
