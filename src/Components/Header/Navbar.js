import React from 'react';
import './navbar.css';
function Navbar() {
    return(
        <nav class="navbar dark-blue-background">
            <div className="row col-12 d-flex justify-content-center text-white">
            <span className="h3">Billboard Management System</span>
            <ul className="nav-items">
                <li><a href="/">Home</a></li>
                <li><a href="/contactus">Contact</a></li>
                <div className="nav-items-buttons">
                <button className="secondary-button"><a href="/login">SIGN IN</a></button>
                <button className="secondary-button"><a href="/signup">SIGN UP</a></button>
                </div>
            </ul>
            </div>
        </nav>
    )
}
export default Navbar;