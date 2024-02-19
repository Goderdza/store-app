import React from "react";
import "../styles/Navbar.scss";
import Category from "../img/category-icon.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="items">
        <div className="category">
          <button>
            <img src={Category} alt="category" width="30px" />
            category
          </button>
        </div>
        <div className="search">
          <input placeholder="Search" />
        </div>
        <div className="language">
          <button>language</button>
        </div>
        <div className="login">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
