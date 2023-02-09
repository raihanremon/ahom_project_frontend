import React, { useState } from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


import Sitelogo from "../assets/logo.svg";

function Mainnav() {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
      };

    return (
        
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>

                    <Navbar.Brand href="/">
                        <img src={Sitelogo} alt="" width="60px" height="48px" />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        className={isActive ? "active" : null}
                        onClick={toggleClass}
                        aria-controls="responsive-navbar-nav">
                            <span className="sr-only"></span>
                            <span className="icon-bar first"></span>
                            <span className="icon-bar middle"></span>
                            <span className="icon-bar last"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Link to="/" className="nav-item nav-link active">
                                Home
                            </Link>

                            <Nav to="/about-us" className="nav-item nav-link">
                                About us
                            </Nav>

                            <Nav to="/meet" className="nav-item nav-link">
                                Meet the team
                            </Nav>

                            <Nav to="/scan" className="nav-item nav-link">
                                Block Search
                            </Nav>

                            <Link to="/login" className="nav-item nav-link">
                                Check our chain
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
    );
}


export default Mainnav;