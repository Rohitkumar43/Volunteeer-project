import React from 'react'
import {BrowserRouter as Router , Routes, Route , BrowserRouter } from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import Donate from './Components/Donate';
import Navbar from './Components/Navbar';
import About from './Components/About';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
  function App(){
    
    return (
      <>
      <Routes>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/donate' element={<Donate/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
        <ToastContainer position='top-centre'/>
      </Routes>

      </>
    );
  }

export default App
