import React, { useState } from 'react';
import './login.css';
import { signinAction } from '../../redux/actions/auth_actions';
import { connect } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import store from '../../redux/store';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    return (
        <div className="login">
            <div className="login-form-container">
                <div className="login-form">
                    <h1 className="login-title">Welcome to</h1>
                    <p className="login-subtitle">KIGALI CITY</p>
                    <div className="form-group p-b">
                        <label className="my-label" for="email">Email</label>
                        <input id="email" onChange={(e) => {
                            setEmail(e.target.value);
                        }} type="email" className="form-control my-input" placeholder="Email" />
                    </div>

                    <div className="form-group p-b">
                        <label className="my-label" for="email">Password</label>
                        <input id="password" onChange={(e) => {
                            setPassword(e.target.value);
                        }} type="password" className="form-control my-input" placeholder="**********" />
                    </div>
                    <div className="form-group full-width-btn  p-b">
                        <button onClick={async () => {
                            if (email && password) {
                                const isTrue = await props.signinAction(email, password);
                                const state = store.getState();
                                if (isTrue && state.authReducers.user != null) {
                                    if (state.authReducers.user.role == 'user') {
                                        history.push('/app/ViewBillboard');
                                    } 
                                    if (state.authReducers.user.role == 'admin') {
                                        history.push('/app/applications');
                                    }
                                }
                            }
                        }} className="btn primary-button signin-button mb-16">LOGIN</button>
                    </div>

                    <p>Don't have an account?  <Link style={{ fontWeight: 'bold' }} to="/signup">SIGN UP HERE</Link></p>
                </div>
            </div>
            <div className="login-bg-img"></div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        account: state.authReducers.account
    };
}

export default connect(mapStateToProps, { signinAction })(Login);
