import React from "react";
import "../styles/Navbar.scss";
import Category from "../img/category-icon.png";
import Search from "../img/search-icon.png";

const Navbar = ({ slideFunction }) => {
  return (
    //navbar main container and items div with other divs and elements
    <div className="navbar-container">
      <div className="items">
        
        <div className="category">
          <button onClick={slideFunction}>
            <img src={Category} alt="category" width="30px" />
            category
          </button>
        </div>

        <div className="search">
          <input type="text" name="search" placeholder="Search" />
          <button>
            <img src={Search} alt="category" width="20px" />
          </button>
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
