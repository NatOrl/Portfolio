import React, { useState } from 'react';
import "./Aboutme.css";
import author from "./me.jpg";
import { Modal } from 'react-bootstrap';
import cv from "./cv.jpg"

const Aboutme = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div id="about" className="container-about py-5">
      <div className="row">
        <div className="col-lg-5 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
        
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading text-white">About Me</h1>
          <p className='paragraph text-white'>
            Hello and welcome to my React app portfolio! I'm thrilled to have you here. 
            As a second-year I.T. student with a passion for frontend development, I've poured my dedication and skills into creating this portfolio. 
            It not only showcases my technical abilities but also reflects my journey as I strive to secure my first job in the dynamic field of IT. 
            I invite you to explore the projects I've worked on, witness the evolution of my coding proficiency, and get a glimpse of my enthusiasm for creating engaging and user-friendly web experiences. 
            Thank you for visiting, and I look forward to the exciting opportunities that lie ahead on my journey as a frontend developer.
          </p>
          <div className="text-center mb-3">
            <div className="link-cv text-white" onClick={handleShowModal}>Click Here to see full CV</div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered size="xl">
        <Modal.Body>
          <img src={cv} alt="Full CV" className="cv-image img-fluid" />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Aboutme
