import React from 'react';
import { Outlet } from 'react-router-dom';


import Header from './../components/Header';
import Footer from './../components/Footer';

const MainLayout = ({styleMainContent}) => {
  return (
    <>
      <Header/>
      <div className={`${styleMainContent} mainContent`}>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default MainLayout
