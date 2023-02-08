import React from "react";
import Sitelogo from "../assets/logo.svg";

function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light">
                <a className="navbar-brand" href="#">
                    <img  width="60" height="50" class="d-inline-block align-top" src={Sitelogo} alt="main logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Meet the team</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Check our chain</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;