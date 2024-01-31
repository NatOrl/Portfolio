import React from "react";
import PortfolioCarousel from "./PortfolioCarousel";
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <div id="portfolio" className="testimonials">
      <h1 className="text-white">my projects</h1>
      <div className="text-center mb-3">
       <a className="link-portfolio text-white" href="/portfolio">Click Here to go to Portfolio Page</a> 
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

