import React from 'react'
import {useState} from 'react';
import logo from "/src/assets/Logo.png";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import PageTokyo from "../components/PageTokyo";
import PageSeoul from "../components/PageSeoul";
import PageBangkok from "../components/PageBangkok";
import PageLondon from "../components/PageLondon";
import Main from "../components/Main";
import About from "../components/About";

const Navbar = () => {

    const [isToggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!isToggle);
    };

  return (

    <BrowserRouter> 
        <ScrollToTop/>
            <nav className="container-nav">
                <div className="nav-logo">
                    <img src={logo} alt=""/>
                </div>

                <div className="nav-menu">
                    <ul>
                        <li><Link to="/"><i className="fa-solid fa-house"></i></Link></li>
                        <li><Link to="/tokyo">東京</Link></li>
                        <li><Link to="/seoul">首爾</Link></li>
                        <li><Link to="/bangkok">曼谷</Link></li>
                        <li><Link to="/london">倫敦</Link></li>
                        <li><Link to="/about">關於</Link></li>
                    </ul>
                </div>


                <div className="nav-burger">
                    <div className="mobile-menu-toggle" onClick={handleToggle}> 
                        <i className="fa-solid fa-bars fa-2x"></i>
                    </div>
                </div>

                <div className={
                    isToggle ? "mobile-list active":"mobile-list"
                } >
                    <ul>
                                    <li><Link to="/" onClick={handleToggle}>首頁</Link></li>
                                    <li><Link to="/tokyo" onClick={handleToggle}>東京</Link></li>
                                    <li><Link to="/seoul" onClick={handleToggle}>首爾</Link></li>
                                    <li><Link to="/bangkok" onClick={handleToggle}>曼谷</Link></li>
                                    <li><Link to="/london" onClick={handleToggle}>倫敦</Link></li>
                                    <li><Link to="/about" onClick={handleToggle}>關於</Link></li>
                    </ul>
                </div>

            </nav>

        <Routes>

            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Main />} />
            <Route path="/tokyo" element={<PageTokyo />} />
            <Route path="/seoul" element={<PageSeoul />} />
            <Route path="/bangkok" element={<PageBangkok />} />
            <Route path="/london" element={<PageLondon />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* Add footer */}
            {/* <Footer /> */}
        </Routes>



    </BrowserRouter> 
  )
}

export default Navbar