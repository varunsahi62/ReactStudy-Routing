import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){

    return(
        <nav className="navbar-style">
            <div className="navbar-logo-head">
                <img className="navbar-logo-style" src="/images/logo.png" alt=""/>
                <p> <strong> React Study: </strong> <span className="navbar-logo-title">Dynamic Clock, Event Handling, Routing</span>  </p>
            </div>

            <div className="navbar-links">
                <Link className="link-style" to="/">Home</Link>
                <Link className="link-style" to="/about">About</Link>
                <Link className="link-style" to="/contact">Contact</Link>
            </div>

        </nav>
    );

}