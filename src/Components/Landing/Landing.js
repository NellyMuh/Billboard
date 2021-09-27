import React from 'react';
import { Link } from "react-router-dom";
import './Landing.css';

const Landing = () => {
  // < Navbar />
  return (
    <div id="landing-section1">
      <div class="center-items">
        <h1 class="landing-subtitle">Welcome To</h1>
        <p class="landing-title">CITY HALL BILLBOARD<br/>MANAGEMENT SYSTEM</p>
        <Link className="btn custom-button" to='/login'>GET STARTED</Link>
      </div>
    </div>
  );
};

export default Landing;
