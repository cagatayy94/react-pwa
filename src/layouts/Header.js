import React from 'react'

export default function Header() {
    return (
        <div className="appHeader bg-primary scrolled">
            <div className="pageTitle">
                Discover
            </div>
            <div className="right">
                <a href="#" className="headerButton toggle-searchbox">
                    <ion-icon name="search-outline"></ion-icon>
                </a>
            </div>
        </div>
    )
}
