import React from 'react';
import "./footer.css";
import facebook from "../../images/facebook.png";
import twitter from '../../images/twitter.png';
import linkedIn from "../../images/linkedIn.png";

function FooterPage() {
    return (
        <div className="container-fluid footer-box dark-blue-background">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-sm-4">
                        <h5><a className="white-text body-text fw-300"href="/">Home</a></h5>
                        <h5><a className="white-text body-text fw-300"href="/contactus">Contact Us</a></h5>
                    </div>
                    <div className="col-sm-auto">                
                            <h5 className="white-text body-text fw-300">Connect with us</h5>
                       
                            <img className="social-link" href="https://www.facebook.com/CityofKigali/" src={facebook}/>
                            <img className="social-link" href="https://twitter.com/cityofkigali?lang=en" src={twitter}/>
                            <img className="social-link" href="#" src={linkedIn}/>
                                              
                    </div>
                       <div className="col-sm-12 footer-copyright text-center">
                           <p className="white-text body-text">Copyright &copy;2021 City of Kigali. All rights reserved.</p>
                      </div>                   
                </div>
            </div>
        </div>
       
    )
}

export default FooterPage;
