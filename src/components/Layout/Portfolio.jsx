import React from "react";
import PortfolioCarousel from "./PortfolioCarousel";
import "./Portfolio.css"
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div id="portfolio" className="testimonials">
      <h1 className="text-white">my projects</h1>
      <div className="text-center mb-3">
       <Link className="link-portfolio text-white" to="/projects">Click Here to go to Portfolio Page</Link> 
      </div>
      <div className="container">
        <div className="testimonials-content">
          <PortfolioCarousel />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;

