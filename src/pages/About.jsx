import React from 'react'
import { Link } from "react-router-dom";
import bgImg from "./assets/images/about-hero.jpg";

export default function About() {

    return (
      <div className = "about-page-container">

<img src={bgImg} alt="About hero" className="about-hero-image" /> 

      <div className="about-page-content">

      <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
      <p>Our mission is to enliven your road trip with the perfect travel plans can go off without a hitch.(Hitch costs extra)</p>
      <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring
        the world on 4 wheels.
      </p>
      </div>
      <div className="about-page-cta">
        <Link className="link-button" to= "/about">Explore our vans</Link>
      <h2>Your destination is waiting.<br/> Your van is ready.</h2>
      </div>
      </div>
    );
  }
  
  