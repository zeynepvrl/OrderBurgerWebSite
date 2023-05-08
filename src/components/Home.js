import React from "react";
import BannerImage from "../images/banneryeni.jpg";
import { Link } from "react-router-dom";
import '../Styles/Home.css'

export const Home = () => {
  return (
    <div className="mainPage" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="order" >
        <Link to="/menu" >
        <button>
          Sipariş Ver
        </button>
        </Link>
      </div>
    </div>
  );
};
