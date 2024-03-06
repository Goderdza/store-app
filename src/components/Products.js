import React from "react";
import "../styles/Products.scss";

const Products = () => {
  return (
    <div className="produts-container">
      <button id="left-arrow"><img src="../img/left-arrow.png" width="30px" /></button>
      <div className="products-frame">
      <div className="first-row">
        <div className="first-item">
          <img src="../img/search-icon.png" width="100px" />
          <button>
            <img />
            Add To Cart
          </button>
        </div>
        <div className="second-item">
          <img src="../img/search-icon.png" width="100px" />
          <button>
            <img />
            Add To Cart
          </button>
        </div>
        <div className="third-item">
          <img src="../img/search-icon.png" width="100px" />
          <button>
            <img />
            Add To Cart
          </button>
        </div>
      </div>
      <div className="second-row">
        <div className="first-item">
          <img src="../img/search-icon.png" width="100px" />
          <button>
            <img />
            Add To Cart
          </button>
        </div>
        <div className="second-item">
          <img src="../img/search-icon.png" width="100px" />
          <button>
            <img />
            Add To Cart
          </button>
        </div>
        <div className="third-item">
          <img src="../img/search-icon.png" width="100px" />
          <button>
            <img />
            Add To Cart
          </button>
        </div>
      </div>
      <div className="third-row">
        <div className="first-item">
          <img src="../img/search-icon.png" width="100px" />
          <button>
            <img />
            Add To Cart
          </button>
        </div>
        <div className="second-item">
          <img src="../img/search-icon.png" width="100px" />
          <button>
            <img />
            Add To Cart
          </button>
        </div>
        <div className="third-item">
          <img src="../img/search-icon.png" width="100px" />
          <button>
            <img />
            Add To Cart
          </button>
        </div>
      </div>
      </div>
      <button id="right-arrow"><img src="../img/right-arrow.webp" width="30px" /></button>
    </div>
  );
};

export default Products;
