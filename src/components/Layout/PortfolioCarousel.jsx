import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Portfolio.css"
import mountain1 from "./mountain1.jpg"

const PortfolioCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
      <img src={mountain1} alt="project 1" />
        <div className="myCarousel">
          <h3 className="text-white">Project 1</h3>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta </p>
        </div>
      </>
      <>
      <img src={mountain1} alt="project 2" />
        <div className="myCarousel">
          <h3 className="text-white">Project 2</h3>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
      <img src={mountain1} alt="project 3" />
        <div className="myCarousel">
          <h3 className="text-white">Project 3</h3>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitcepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
      <img src={mountain1} alt="project 4" />
        <div className="myCarousel">
          <h3 className="text-white">Project 4</h3>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing eliias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
    </Carousel>
  )
}

export default PortfolioCarousel;
