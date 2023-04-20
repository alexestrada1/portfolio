import React from "react";
import account from "../../Assets/account.svg"
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
  return (
  <div className="home">
    <div className="info">
        <img alt="self-portrait" src={account}/>
        <p>Hello, my name is</p>
        <p className="title">Alex Estrada</p>
        <p>I am a learning web developer with some knowledge software engineering.</p>
        <div className="link">
        <Link to="/about">
            More About Me
        </Link>
        </div>
    </div>
  </div>)
};
export default Home;
