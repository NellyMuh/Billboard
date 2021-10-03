import React, { useState } from 'react';
import { connect } from 'react-redux';
import './signup.css';
import { signupAction } from '../../redux/actions/auth_actions';
import { Link, useHistory } from "react-router-dom";

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [gender, setGender] = useState('Male');
    const [phone, setPhone] = useState('');
    const [nid, setNid] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    return (
        <div className="signup-container" id="Signup-page">
            <div className="signup-form">
                <div className="form-group">
                    <h1 className="login-title">Welcome to</h1>
                    <p className="login-subtitle">KIGALI CITY</p>
                    <div className="p-b-16" />
                    <label className="my-label" for="fname">First Name</label>
                    <input onChange={(e) => { setFname(e.target.value); }} id="fname" type="text" className="form-control my-input" placeholder="First Name" required="required" />
                    <div className="p-b-16" />
                    <label className="my-label" for="lname">Last Name</label>
                    <input onChange={(e) => { setLname(e.target.value); }} id="lname" type="text" className="form-control my-input" placeholder="Last Name" required="required" />
                    <div className="p-b-16" />
                    <label className="my-label" for="gender">Gender</label>
                    <select onChange={(e) => { setGender(e.target.value); }} id="gender" type="text" className="form-control my-input" placeholder="Gender" required="required">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <div className="p-b-16" />
                    <label className="my-label" for="phone number">Phone number</label>
                    <input onChange={(e) => { setPhone(e.target.value); }} id="phone number" type="text" className="form-control my-input" placeholder="Phone number" />
                    <div className="p-b-16" />
                    <label className="my-label" for="National ID">National ID</label>
                    <input onChange={(e) => { setNid(e.target.value); }} id="NID" type="text" className="form-control my-input" placeholder="National ID" required="required" />
                    <div className="p-b-16" />
                    <label className="my-label" for="email">Email</label>
                    <input onChange={(e) => { setEmail(e.target.value); }} id="email" type="text" className="form-control my-input" placeholder="Email" required="required" />
                    <div className="p-b-16" />
                    <label className="my-label" for="password">Password</label>
                    <input onChange={(e) => { setPassword(e.target.value); }} id="password" type="password" className="form-control my-input" placeholder="**********" required="required" />
                </div>
                <div className="p-b-16" />
                <div className="form-group full-width-btn">
                    <button onClick={async () => {
                        setIsLoading(true);
                        const result = await props.signupAction(email, password, fname, lname, gender, phone, nid);
                        if (result == true) {
                            history.push('/login');
                        }
                    }} className="btn primary-button signin-button">{isLoading ? (<i style={{color: "white"}} class="fa fa-spinner fa-spin"></i>) : "Register"}</button>
                </div>
                <div className="p-b-16" />
                <p>have an account?  <Link style={{ fontWeight: 'bold' }} to="/login">LOGIN</Link></p>
            </div>
            <div className="background-image"></div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        account: state.authReducers.account
    };
}

export default connect(mapStateToProps, { signupAction })(Signup);