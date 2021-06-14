import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login-form mt-1">
            <div className="section">
                <img src="assets/img/sample/photo/vector4.png" alt="image" className="form-image"></img>
            </div>
            <div className="section mt-1">
                <h1>Get started</h1>
                <h4>Fill the form to log in</h4>
            </div>
            <div className="section mt-1 mb-5">
                <form action="app-pages.html">
                    <div className="form-group boxed">
                        <div className="input-wrapper">
                            <input type="email" className="form-control" id="email1" placeholder="Email address"></input>
                            <i className="clear-input">
                                <ion-icon name="close-circle" role="img" className="md hydrated" aria-label="close circle"></ion-icon>
                            </i>
                        </div>
                    </div>

                    <div className="form-group boxed">
                        <div className="input-wrapper">
                            <input type="password" className="form-control" id="password1" placeholder="Password"></input>
                            <i className="clear-input">
                                <ion-icon name="close-circle" role="img" className="md hydrated" aria-label="close circle"></ion-icon>
                            </i>
                        </div>
                    </div>

                    <div className="form-links mt-2">
                        <div>
                            <Link to={`/register`}>
                                <a>Register Now</a>
                            </Link>
                        </div>
                        <div>
                            <Link to={`/forgot-password`}>
                                <a className="text-muted">Forgot Password?</a>
                            </Link>
                        </div>
                    </div>

                    <div className="form-button-group">
                        <button type="submit" className="btn btn-primary btn-block btn-lg">Log in</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
