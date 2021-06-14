import React from 'react'
import { Link } from 'react-router-dom';

export default function UnauthenticatedHeader() {
    return (
        <div className="appHeader no-border transparent position-absolute">
            <div className="left">
                <Link to={`/`}>
                <a href="#" className="headerButton goBack">
                    <ion-icon name="chevron-back-outline" role="img" className="md hydrated" aria-label="chevron back outline"></ion-icon>
                </a>
                </Link>
            </div>
            <div className="pageTitle"></div>
            <div className="right">
                <Link to={`/login`}>
                    <a href="" className="headerButton">
                        Login
                    </a>
                </Link>
            </div>
        </div>
    )
}
