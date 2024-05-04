import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/Sofia_Capital.jpg'
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
            <h1> Capital City of Bulgaria</h1>
            <p>Sofia is one of the oldest cities in Europe</p>
            <Link to = "/menu">
                <button> EXPLORE NOW </button>
            </Link>
        </div>
    </div>
  );
}

export default Home