import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import "./PortfolioPage.css"
import mountain1 from "../Layout/mountain1.jpg"


const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1 className="py-5">my projects</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <img className="circle" src={mountain1} alt="project 1" />
              <h3 className="text-white">Project 1</h3>
              <p className="text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque corporis magnam dolor nam recusandae, facere reiciendis provident libero nemo?</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <img className="circle" src={mountain1} alt="project 1" />

              <h3 className="text-white">Project 2</h3>
              <p className="text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque corporis magnam dolor nam recusandae, facere reiciendis provident libero nemo?</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <img className="circle" src={mountain1} alt="project 1" />

              <h3 className="text-white">Project 3</h3>
              <p className="text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque corporis magnam dolor nam recusandae, facere reiciendis provident libero nemo?</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <img className="circle" src={mountain1} alt="project 1" />

              <h3 className="text-white">Project 4</h3>
              <p className="text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque corporis magnam dolor nam recusandae, facere reiciendis provident libero nemo?</p>
            </div>
              
          </div>
            {/* - */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <img className="circle" src={mountain1} alt="project 1" />

              <h3 className="text-white">Project 5</h3>
              <p className="text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque corporis magnam dolor nam recusandae, facere reiciendis provident libero nemo?</p>
             </div>
              
          </div>
            {/* - */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
            < img className="circle" src={mountain1} alt="project 1" />

              <h3  className="text-white">Project 6</h3>
              <p className="text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque corporis magnam dolor nam recusandae, facere reiciendis provident libero nemo?</p>
              </div>
              
          </div>
            {/* - */}
          <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="box">
                <img className="circle" src={mountain1} alt="project 1" />

                <h3 className="text-white">Project 7</h3>
                <p className="text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque corporis magnam dolor nam recusandae, facere reiciendis provident libero nemo?</p>
              </div>
              
          </div>
            {/* - */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <img className="circle" src={mountain1} alt="project 1" />

              <h3  className="text-white">Project 8</h3>
              <p className="text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque corporis magnam dolor nam recusandae, facere reiciendis provident libero nemo?</p>
            </div>
              
          </div>
              {/* - */}
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="box">
              <img className="circle" src={mountain1} alt="project 1" />

              <h3 className="text-white">Project 9</h3>
              <p className="text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque corporis magnam dolor nam recusandae, facere reiciendis provident libero nemo?</p>
            </div>
              {/* - */}
            
              
          </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="box">
                <img className="circle" src={mountain1} alt="project 1" />

                <h3 className="text-white">Project 10</h3>
                <p className="text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque corporis magnam dolor nam recusandae, facere reiciendis provident libero nemo?</p>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;

