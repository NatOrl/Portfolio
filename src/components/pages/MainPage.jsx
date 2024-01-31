import React from 'react'
import Header from '../Layout/Header';
import Aboutme from '../Layout/Aboutme';
import Services from '../Layout/Services';
import Experience from '../Layout/Experience';
import Portfolio from '../Layout/Portfolio';
import Contacts from '../Layout/Contact';

 const MainPage = () => {
  return <>
    <Header/>
    <Aboutme/>
    <Services/>
    <Experience/>
    <Portfolio/>
    <Contacts/>
  </>
}

export default MainPage