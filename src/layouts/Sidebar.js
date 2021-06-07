import React from 'react'

export default function Sidebar() {
    return (
<div className="modal fade panelbox panelbox-left" id="sidebarPanel" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body p-0">


                        <div className="profileBox">
                            <div className="image-wrapper">
                                <img src="assets/img/sample/avatar/avatar1.jpg" alt="image" className="imaged rounded"></img>
                            </div>
                            <div className="in">
                                <strong>Julian Gruber</strong>
                                <div className="text-muted">
                                    <ion-icon name="location"></ion-icon>
                                    California
                                </div>
                            </div>
                            <a href="#" className="close-sidebar-button" data-dismiss="modal">
                                <ion-icon name="close"></ion-icon>
                            </a>
                        </div>
          

                        <ul className="listview flush transparent no-line image-listview mt-2">
                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-primary">
                                        <ion-icon name="home-outline"></ion-icon>
                                    </div>
                                    <div className="in">
                                        Discover
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-primary">
                                        <ion-icon name="cube-outline"></ion-icon>
                                    </div>
                                    <div className="in">
                                        Components
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-primary">
                                        <ion-icon name="layers-outline"></ion-icon>
                                    </div>
                                    <div className="in">
                                        <div>Pages</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-primary">
                                        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                                    </div>
                                    <div className="in">
                                        <div>Chat</div>
                                        <span className="badge badge-danger">5</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="icon-box bg-primary">
                                        <ion-icon name="moon-outline"></ion-icon>
                                    </div>
                                    <div className="in">
                                        <div>Dark Mode</div>
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input dark-mode-switch"
                                                id="darkmodesidebar"></input>
                                            <label className="custom-control-label" htmlFor="darkmodesidebar"></label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className="listview-title mt-2 mb-1">
                            <span>Friends</span>
                        </div>
                        <ul className="listview image-listview flush transparent no-line">
                            <li>
                                <a href="page-chat.html" className="item">
                                    <img src="assets/img/sample/avatar/avatar7.jpg" alt="image" className="image"></img>
                                    <div className="in">
                                        <div>Sophie Asveld</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="page-chat.html" className="item">
                                    <img src="assets/img/sample/avatar/avatar3.jpg" alt="image" className="image"></img>
                                    <div className="in">
                                        <div>Sebastian Bennett</div>
                                        <span className="badge badge-danger">6</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="page-chat.html" className="item">
                                    <img src="assets/img/sample/avatar/avatar10.jpg" alt="image" className="image"></img>
                                    <div className="in">
                                        <div>Beth Murphy</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="page-chat.html" className="item">
                                    <img src="assets/img/sample/avatar/avatar2.jpg" alt="image" className="image"></img>
                                    <div className="in">
                                        <div>Amelia Cabal</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="page-chat.html" className="item">
                                    <img src="assets/img/sample/avatar/avatar5.jpg" alt="image" className="image"></img>
                                    <div className="in">
                                        <div>Henry Doe</div>
                                    </div>
                                </a>
                            </li>
                        </ul>

                    </div>

   
                    <div className="sidebar-buttons">
                        <a href="#" className="button">
                            <ion-icon name="person-outline"></ion-icon>
                        </a>
                        <a href="#" className="button">
                            <ion-icon name="archive-outline"></ion-icon>
                        </a>
                        <a href="#" className="button">
                            <ion-icon name="settings-outline"></ion-icon>
                        </a>
                        <a href="#" className="button">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
