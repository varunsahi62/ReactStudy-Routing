import React from "react";
import Navbar from "../Navbar";

export default function About(){

    return(
        <div >
            <Navbar />
            <div className="about-style">

                <h1>About me:</h1>
                <br />

                <p>Hi! I'm Varun & I'm a web developer.</p>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia deserunt omnis incidunt, numquam hic architecto quo quod possimus porro similique. </p>
                <br />
                <br />
                <a className="img-link" href="https://github.com/varunsahi62" target="_blank"> 
                    <div className="about-link-style">
                        <img src="./images/logo2.png" alt="" /> My Github Profile 
                    </div>
                </a>
            </div>
        </div>
    );

}