import React,{Suspense,lazy, useEffect, useState} from 'react';
import { BrowserRouter as Router,Routes,Route,Navigate  } from 'react-router-dom';

// lazy load components
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const ServiceList = lazy(() => import('./pages/ServiceList.jsx'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Error = lazy(() => import('./pages/Error.jsx'));


import MainLayout from './layout/MainLayout';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          {/* render the home page */}
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/servicelist" element={<ServiceList/>}/>
          <Route path="/servicelist/:id" element={<ServiceDetail/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  </Suspense>
  )
}

export default App
