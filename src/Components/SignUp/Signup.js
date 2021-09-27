import React, { useState } from 'react';
import { connect } from 'react-redux';
import './signup.css';
import { signupAction } from '../../redux/actions/auth_actions';
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [genger, setGenger] = useState('');
    const [phone, setPhone] = useState('');
    const [nid, setNid] = useState('');
    const history = useHistory();
    return (
        <div>
            <div className="signup-container" id="Signup-page">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 login-form-box">
                            <div className="login-form">
                                <div className="form-group">
                                    <h1 className="black-text body-text mb-0 ">Welcome to</h1>
                                    <p className="black-text subtitle fw-700">KIGALI CITY</p>
                                    <label className="my-label" for="fname">First Name</label>
                                    <input onChange={(e) => { setFname(e.target.value); }} id="fname" type="text" className="form-control my-input" placeholder="First Name" required="required" />
                                    <label className="my-label" for="lname">Last Name</label>
                                    <input onChange={(e) => { setLname(e.target.value); }} id="lname" type="text" className="form-control my-input" placeholder="Last Name" required="required" />
                                    <label className="my-label" for="gender">Gender</label>
                                    <select onChange={(e) => { setGenger(e.target.value); console.log(e.target.value); }} id="gender" type="text" className="form-control my-input" placeholder="Gender" required="required">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <label className="my-label" for="phone number">Phone number</label>
                                    <input onChange={(e) => { setPhone(e.target.value); }} id="phone number" type="text" className="form-control my-input" placeholder="Phone number" />
                                    <label className="my-label" for="National ID">National ID</label>
                                    <input onChange={(e) => { setNid(e.target.value); }} id="NID" type="text" className="form-control my-input" placeholder="National ID" required="required" />
                                    <label className="my-label" for="email">Email</label>
                                    <input onChange={(e) => { setEmail(e.target.value); }} id="email" type="text" className="form-control my-input" placeholder="Email" required="required" />
                                </div>

                                <div className="form-group mb-16">
                                    <label className="my-label" for="password">Password</label>
                                    <input onChange={(e) => { setPassword(e.target.value); }} id="password" type="password" className="form-control my-input" placeholder="**********" required="required" />
                                </div>
                                <div className="form-group">
                                    <button className="btn primary-button signin-button">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        account: state.authReducers.account
    };
}

export default connect(mapStateToProps, { signupAction })(Signup);
