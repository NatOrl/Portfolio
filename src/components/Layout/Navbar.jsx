import React from 'react'
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';


const NavbarComponent = () => {
  const scrollDuration = 500;

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <a className="navbar-brand text-white" href="#">Natalia Orłowska</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link duration={scrollDuration} smooth={true} to="home" offset={-110} className="nav-link text-white custom-nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link duration={scrollDuration} smooth={true} to="about" offset={-110} className="nav-link text-white custom-nav-link" href="/">About</Link>
            </li>
            <li className="nav-item">
              <Link duration={scrollDuration} smooth={true} to="services" offset={-110} className="nav-link text-white custom-nav-link" href="/">Services</Link>
            </li>
            <li className="nav-item">
              <Link duration={scrollDuration} smooth={true} to="experience" offset={-110} className="nav-link text-white custom-nav-link" href="/">Experience</Link>
            </li>
            <li className="nav-item">
              <Link duration={scrollDuration} smooth={true} to="portfolio" offset={-110} className="nav-link text-white custom-nav-link" href="/">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link duration={scrollDuration} smooth={true} to="contacts" offset={-110} className="nav-link text-white custom-nav-link" href="/">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;