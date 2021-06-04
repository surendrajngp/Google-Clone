import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcons from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import homeLogo from "../Images/homeLogo.png";
import Search from "../Components/Search";

const Home = () => {
  return (
    <div className="Home">
      {/* Header */}
      <div className="home_header">
        {/* header left */}
        <div className="home_header_left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        {/* Header Right */}
        <div className="home_header_right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcons />
          <Avatar />
        </div>
      </div>

      {/* Body */}
      <div className="home_body">
        <img src={homeLogo} alt="Logo" />

        <div className="home_searchContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
