
import React from 'react';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const NavbarComponent = () => {
  const scrollDuration = 500;
  const location = useLocation();

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: scrollDuration,
      smooth: true,
    });
  };

  const isOnMainPage = location.pathname === '/';

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <RouterLink className="navbar-brand text-white" to="/">Natalia Orłowska</RouterLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              {isOnMainPage ? (
                <ScrollLink duration={scrollDuration} smooth={true} to="home" offset={-110} className="nav-link text-white custom-nav-link" href="/">Home</ScrollLink>
              ) : (
                <RouterLink className="nav-link text-white custom-nav-link" to="/">Home</RouterLink>
              )}
            </li>
            <li className="nav-item">
              {isOnMainPage ? (
                <ScrollLink duration={scrollDuration} smooth={true} to="about" offset={-110} className="nav-link text-white custom-nav-link" href="/">About</ScrollLink>
              ) : (
                <RouterLink className="nav-link text-white custom-nav-link" to="/">About</RouterLink>
              )}
            </li>
            <li className="nav-item">
              {isOnMainPage ? (
                <ScrollLink duration={scrollDuration} smooth={true} to="services" offset={-110} className="nav-link text-white custom-nav-link" href="/">Services</ScrollLink>
              ) : (
                <RouterLink className="nav-link text-white custom-nav-link" to="/">Services</RouterLink>
              )}
            </li>
            <li className="nav-item">
              {isOnMainPage ? (
                <ScrollLink duration={scrollDuration} smooth={true} to="experience" offset={-110} className="nav-link text-white custom-nav-link" href="/">Experience</ScrollLink>
              ) : (
                <RouterLink className="nav-link text-white custom-nav-link" to="/">Experience</RouterLink>
              )}
            </li>
            <li className="nav-item">
              {isOnMainPage ? (
                <ScrollLink duration={scrollDuration} smooth={true} to="portfolio" offset={-110} className="nav-link text-white custom-nav-link" href="/">Portfolio</ScrollLink>
              ) : (
                <RouterLink className="nav-link text-white custom-nav-link" to="/">Portfolio</RouterLink>
              )}
            </li>
            <li className="nav-item">
            
                <RouterLink className="nav-link text-white custom-nav-link" to="/contactPage">Contact</RouterLink>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;