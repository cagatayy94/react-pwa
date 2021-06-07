import React from 'react'

export default function Search() {
    return (
        <div id="search" className="appHeader">
            <form className="search-form">
                <div className="form-group searchbox">
                    <input type="text" className="form-control" placeholder="Search..."></input>
                    <i className="input-icon">
                        <ion-icon name="search-outline"></ion-icon>
                    </i>
                    <a href="#" className="ml-1 close toggle-searchbox">
                        <ion-icon name="close-circle"></ion-icon>
                    </a>
                </div>
            </form>
        </div>
    )
}
