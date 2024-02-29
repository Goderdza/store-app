import React from "react";
import Navbar from "./components/Navbar";
import CategoryList from "./components/CategoryList";
import './styles/App.scss'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <CategoryList />
    </div>
  );
};

export default App;
