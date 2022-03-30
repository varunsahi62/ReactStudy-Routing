import React from "react";
import Navbar from "../Navbar";

export default function Contact(){

    return(
        <div>
            <Navbar />
            <div className="contact-style">
                <h1>Contact: </h1>
                <br />
                <p>This is my Contact Page, Lorem, ipsum.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque optio voluptatibus sed labore ad quos maxime minima? Eaque, earum ad.</p>
                <br /> <br />

                <a className="img-link" href="#" target="_blank"> 
                    <div className="about-link-style">
                        <img src="./images/logo3.png" alt="" /> My Dummy link
                    </div>
                </a>
            </div>
        </div>
    );

}