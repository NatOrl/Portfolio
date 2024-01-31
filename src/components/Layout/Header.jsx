import React from 'react'
import "./Header.css";
import { ReactTyped } from "react-typed";
import { Link } from 'react-scroll';

const Header = () => {
  const scrollDuration = 500;

  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1 className='text-white'>Welcome to my Website </h1>
        <ReactTyped
          className="typed-text"
          strings={["Web Design", "Web Development", "Facebook Ads", "Social Media Marketing", "Google Ads"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link duration={scrollDuration} smooth={true} to="contacts" offset={-110} href='#' className='btn-main-offer'>Contact Me</Link>
      </div>
      
    </div>
  )
}

export default Header
