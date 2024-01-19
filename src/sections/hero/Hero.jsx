import React from "react";
import './Hero.css'
import Header from "../../components/header/Header";
function Hero() {
    return (
        <div className="hero">
            <Header/>
            <div className="overlay">
            <p className="hero-p">100+ PROJECTS AROUND THE GLOBE</p> 
            <h1 className="hero-h1">Women in Action</h1> 
            <h3 className="hero-h3">
                We work towards ensuring a life free from inequality and </h3>
            <h3 className="hero-h3">discrimination for every woman.</h3>
            <button>DONATE</button>
            
            </div>

        </div>
    )
}
export default Hero