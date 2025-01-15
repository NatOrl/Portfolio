import React  from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Layout/Navbar';
// import Header from './components/Layout/Header';
// import Aboutme from './components/Layout/Aboutme';
// import Services from './components/Layout/Services';
// import Experience from './components/Layout/Experience';
// import Portfolio from './components/Layout/Portfolio';
// import Contacts from './components/Layout/Contact';
import Footer from './components/Layout/Footer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioPage from './components/pages/PortfolioPage';
import  MainPage  from './components/pages/MainPage';
import ContactPage from './components/pages/ContactPage';




function App() {
    return (

      <>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<PortfolioPage/>} />
            <Route path='/contactpage' element={<ContactPage/>} />
          </Routes>
          <Footer />
      </>
  
    );
  }

  
  export default App;
