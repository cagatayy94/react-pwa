import React from 'react'

export default function Capsule() {
    return (
        <div id="appCapsule">
            <div className="header-large-title">
                <h1 className="title">Discover</h1>
                <h4 className="subtitle">Welcome to Mobilekit</h4>
            </div>

            <div className="section full mt-3 mb-3">
                <div className="carousel-multiple owl-carousel owl-theme">

                    <div className="item">
                        <div className="card">
                            <img src="assets/img/sample/photo/d1.jpg" className="card-img-top" alt="image"></img>
                            <div className="card-body pt-2">
                                <h4 className="mb-0">Progressive web app ready</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img src="assets/img/sample/photo/d2.jpg" className="card-img-top" alt="image"></img>
                            <div className="card-body pt-2">
                                <h4 className="mb-0">Reusable components</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img src="assets/img/sample/photo/d3.jpg" className="card-img-top" alt="image"></img>
                            <div className="card-body pt-2">
                                <h4 className="mb-0">Great for phones  tablets</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img src="assets/img/sample/photo/d4.jpg" className="card-img-top" alt="image"></img>
                            <div className="card-body pt-2">
                                <h4 className="mb-0">Change the styles in one file</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img src="assets/img/sample/photo/d6.jpg" className="card-img-top" alt="image"></img>
                            <div className="card-body pt-2">
                                <h4 className="mb-0">Sketch source file included</h4>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img src="assets/img/sample/photo/d5.jpg" className="card-img-top" alt="image"></img>
                            <div className="card-body pt-2">
                                <h4 className="mb-0">Written with a code structure</h4>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className="section mt-3 mb-3">
                <div className="card">
                    <div className="card-body d-flex justify-content-between align-items-end">
                        <div>
                            <h6 className="card-subtitle">Discover</h6>
                            <h5 className="card-title mb-0 d-flex align-items-center justify-content-between">
                                Dark Mode
                            </h5>
                        </div>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input dark-mode-switch" id="darkmodeswitch"></input>
                            <label className="custom-control-label" htmlFor="darkmodeswitch"></label>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section mt-3 mb-3">
                <div className="card">
                    <img src="assets/img/sample/photo/wide4.jpg" className="card-img-top" alt="image"></img>
                    <div className="card-body">
                        <h6 className="card-subtitle">Discover</h6>
                        <h5 className="card-title">Components</h5>
                        <p className="card-text">
                            Reusable components designed for the mobile interface and ready to use.
                        </p>
                        <a href="app-components.html" className="btn btn-primary">
                            <ion-icon name="cube-outline"></ion-icon>
                            Preview
                        </a>
                    </div>
                </div>
            </div>

            <div className="section mt-3 mb-3">
                <div className="card">
                    <img src="assets/img/sample/photo/wide2.jpg" className="card-img-top" alt="image"></img>
                    <div className="card-body">
                        <h6 className="card-subtitle">Discover</h6>
                        <h5 className="card-title">Pages</h5>
                        <p className="card-text">
                            Mobilekit comes with basic pages you may need and use in your projects easily.
                        </p>
                        <a href="app-pages.html" className="btn btn-primary">
                            <ion-icon name="layers-outline"></ion-icon>
                            Preview
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
