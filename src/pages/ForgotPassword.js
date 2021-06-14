import React from 'react'
import UnauthenticatedHeader from '../layouts/UnauthenticatedHeader';

export default function ForgotPassword() {
    return (
        <div>
            <UnauthenticatedHeader/>
            <div id="appCapsule">
                <div className="login-form">
                    <div className="section">
                        <h1>Reset Password</h1>
                        <h4>Type your email to reset your password</h4>
                    </div>
                    <div className="section mt-2 mb-5">
                        <form action="app-pages.html">

                            <div className="form-group boxed">
                                <div className="input-wrapper">
                                    <input type="email" className="form-control" id="name1" placeholder="Email address"/>
                                    <i className="clear-input">
                                        <ion-icon name="close-circle" role="img" className="md hydrated" aria-label="close circle"></ion-icon>
                                    </i>
                                </div>
                            </div>
                            <div className="form-button-group">
                                <button type="submit" className="btn btn-primary btn-block btn-lg">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
