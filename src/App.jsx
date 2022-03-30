import React from "react";
import Clock from "./components/Clock";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}