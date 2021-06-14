import React from 'react'
import UnauthenticatedHeader from '../layouts/UnauthenticatedHeader';

export default function Register() {
    return (
        <div>
            <UnauthenticatedHeader/>
            <div id="appCapsule">
                <div className="login-form">
                    <div className="section">
                        <h1>Register</h1>
                        <h4>Fill the form to join us</h4>
                    </div>
                    <div className="section mt-2 mb-5">
                        <form action="app-pages.html">
                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <input type="email" className="form-control" id="name1" placeholder="Full name"></input>
                                    <i className="clear-input">
                                        <ion-icon name="close-circle" role="img" className="md hydrated" aria-label="close circle"></ion-icon>
                                    </i>
                                </div>
                            </div>
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
                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <input type="password" className="form-control" id="password2" placeholder="Password (again)"></input>
                                    <i className="clear-input">
                                        <ion-icon name="close-circle" role="img" className="md hydrated" aria-label="close circle"></ion-icon>
                                    </i>
                                </div>
                            </div>
                            <div className=" mt-1 text-left">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customChecka1"></input>
                                    <label className="custom-control-label text-muted" for="customChecka1">I Agree <a href="javascript:;">Terms &amp; Conditions</a></label>
                                </div>

                            </div>
                            <div className="form-button-group">
                                <button type="submit" className="btn btn-primary btn-block btn-lg">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
