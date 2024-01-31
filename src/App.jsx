import React  from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Layout/Navbar';
import Header from './components/Layout/Header';
import Aboutme from './components/Layout/Aboutme';
import Services from './components/Layout/Services';
import Experience from './components/Layout/Experience';
import Portfolio from './components/Layout/Portfolio';
import Contacts from './components/Layout/Contact';
import Footer from './components/Layout/Footer';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './components/pages/ContactPage';




function App() {


  return (
    <> 
    <NavbarComponent/>
    <Header/>
    <Aboutme/>
    <Services/>
    <Experience/>
    <Portfolio/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App
