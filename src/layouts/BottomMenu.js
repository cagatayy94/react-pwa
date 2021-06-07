import React from 'react'

export default function BottomMenu() {
    return (
        <div className="appBottomMenu">
            <a href="#" className="item">
                <div className="col">
                    <ion-icon name="home-outline"></ion-icon>
                </div>
            </a>
            <a href="#" className="item">
                <div className="col">
                    <ion-icon name="cube-outline"></ion-icon>
                </div>
            </a>
            <a href="#" className="item">
                <div className="col">
                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                    <span className="badge badge-danger">5</span>
                </div>
            </a>
            <a href="#" className="item">
                <div className="col">
                    <ion-icon name="layers-outline"></ion-icon>
                </div>
            </a>
            <a href="#" className="item" data-toggle="modal" data-target="#sidebarPanel">
                <div className="col">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
            </a>
        </div>
    )
}
