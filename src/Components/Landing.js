import React from 'react';
import Navbar from './Header/Navbar';
import { Link } from "react-router-dom";

const Landing  = () => {
  < Navbar />
    return (
     
      <div id="landing-section1" class="container-fluid d-flex">
      <div class="container align-self-center">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-10 col-lg-7">
              <h1 class="subtitle white-text text-center mb-64">Welcome To</h1>
              <p class="title white-text  mb-32 fw-700">CITY HALL BILLBOARD MANAGEMENT SYSTEM</p>
              <Link className="btn btn-success mr-5 fw-700" to='/login'>GET STARTED</Link>              
            </div>
        </div>
      </div>
    </div>
    );
};

export default Landing;
