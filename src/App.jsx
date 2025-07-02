import React from 'react';
import { Images } from './Constant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './coponent/Navbar';
import Header from './coponent/header';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Sale from './pages/Sale';
import Features from './pages/Features';
import About from './pages/About';
import Main from './coponent/main';
import Footer from './coponent/Footer';
import { CartProvider } from './context/card';
import User from './pages/User';  
import './App.css'


export default function App() {
  return (
    <>
    <CartProvider>
 <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Header /> 
          <Main/>
        
          </>
        } />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Sale" element={<Sale />} /> 
        <Route path="/Shop" element={<Shop />} />  
        <Route path="/Blog" element={<Blog />} />  
        <Route path="/Featurrs" element={<Features/>} />
        <Route path='/About' element={<About />} />
        <Route path='/User' element={<User />} />
      </Routes>
      <Footer/>
    </Router>
    </CartProvider>



    
    </>
  );
}