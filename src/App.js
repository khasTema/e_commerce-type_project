import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Chekout from './components/pages/Chekout';
import About from './components/pages/About';
import ProductPage from './components/pages/ProductPage';
import Thankyou from './components/pages/Thankyou';
import Category from './components/pages/Category';
import ContextProvider from './components/context/configContext'


function App() {


  return (
    <div className="App">
      <ContextProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chekout" element={<Chekout />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
        <Footer/>
      </ContextProvider>
   
    </div>
  );
}

export default App;
