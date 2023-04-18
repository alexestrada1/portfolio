import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="name">
        <Link to="/">Alex Estrada</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </div>
  );
};

export default Header;
