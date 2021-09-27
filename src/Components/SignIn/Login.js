import React, { useState } from 'react';
import './login.css';
import FooterPage from '../Footer/FooterPage';
import { signinAction } from '../../redux/actions/auth_actions';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    return (
        <div className="login">
            <div className="login-container" id="Login-page">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 login-form-box">
                            <div className="login-form">
                                <div className="form-group">
                                    <h1 className="black-text body-text mb-0 ">Welcome to</h1>
                                    <p className="black-text subtitle fw-700">KIGALI CITY</p>
                                    <label className="my-label" for="email">Email</label>
                                    <input id="email" onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} type="email" className="form-control my-input" placeholder="Email" />
                                </div>

                                <div className="form-group mb-16">
                                    <label className="my-label" for="email">Password</label>
                                    <input id="password" onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} type="password" className="form-control my-input" placeholder="**********" />
                                </div>
                                <div className="form-group">
                                    <button onClick={async () =>  {
                                        const isTrue = await props.signinAction(email, password);
                                        if (isTrue) {
                                            history.push('/app/RequestBillboard');
                                        }
                                    }} className="btn primary-button signin-button mb-16">LOGIN</button>
                                    <p>Don't have an account? Signup <a href="/signup">Here</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            < FooterPage />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        account: state.authReducers.account
    };
}

export default connect(mapStateToProps, { signinAction })(Login);
