import React from 'react';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import './Style.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div className='header'>
            <div className='header_logo'>
              <div className='log0_img'>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/006/986/163/small_2x/vintage-retro-chef-cooking-logo-restaurant-business-food-free-vector.jpg' />
                <p>Food Festive</p>
              </div>
            </div>
            <div className="header_side">
              <div>
                <Link to="/ "  >
                  Home
                </Link>
                <Link to="Contact" >
                  Contact
                </Link>
                <Link to="/Menu"  >
                  Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/Menu' element={<Menu />} />
        </Routes>

        <div className='footer'>
          <i class="ri-instagram-line"></i>
          <i class="ri-facebook-box-fill"></i>
          <i class="ri-whatsapp-line"></i>
        </div>

      </BrowserRouter>


    </>
  );
}

export default App;
