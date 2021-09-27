import React from 'react';
import "./contact-page.css";
import FooterPage from '../Footer/FooterPage';

const ContactPage = () => {
    return (
      <div className="contact">

        <div className="container-fluid">
          <div className="row">
          <div className="col">
            <div className="contact-left">
            <h2 className="contact-header2">
              We would love <br /> to hear <br /> from you!
            </h2>
            <p className="contact-paragraph">
              Fill out the form and our team will get back to you <br />as soon as possible!!
            </p>
            <div className="contact-span">
              <h3>Email Us</h3>
              <span>info@kigalicity.gov.rw</span>
            </div>
            <div className="social-pages">
              <ul>
                <li>
                  <a href="/">LinkedIn</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
            </div>
            <div className="col">
            <div className="contact-form">
            <form>
              <h2 className="contact-header1">Contact Us</h2>
              <div className="inputBox">
                <input type="text" name="name" required="required"></input>
                <span>Name</span>
              </div>
  
              <div className="inputBox">
                <input type="text" name="email" required="required"></input>
                <span>Email</span>
              </div>
  
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Type your message...</span>
              </div>
  
              <div className="inputBox">
                <input
                id="submit-contact"
                  type="submit"
                  name=""
                  required="required"
                  value="Send Message"
                ></input>
              </div>
            </form>
          </div>
            </div>
           
          </div>
        </div>
         < FooterPage />
      </div>
    );
  };
  
  export default ContactPage;