import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import maintokyo from "../assets/main/main-tokyo.png";
import mainseoul from "../assets/main/main-seoul.png";
import mainbangkok from "../assets/main/main-bangkok.png";
import mainlondon from "../assets/main/main-london.png";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


function Main() {
  return (

    <>
    
        {/* <Navbar /> */}
        <main className="container-main">
            <div className="mobile-list">
                <ul>
                    <li><Link to="/">首頁</Link></li>
                    <li><Link to="/tokyo">東京</Link></li>
                    <li><Link to="/seoul">首爾</Link></li>
                    <li><Link to="/bangkok">曼谷</Link></li>
                    <li><Link to="/london">倫敦</Link></li>
                    <li><Link to="/about">關於</Link></li>
                </ul>
            </div>

            <div className="container-grid">

                <div className="img-main img-japan">
                    <Link to="/tokyo"><img src={maintokyo} alt=""/></Link>
                </div>
                <div className="img-main img-seoul">
                    <Link to="/seoul"><img src={mainseoul} alt=""/></Link>
                </div>
                <div className="img-main img-bangkok">
                    <Link to="/bangkok"><img src={mainbangkok} alt=""/></Link>
                </div>
                <div className="img-main img-london">
                    <Link to="/london"><img src={mainlondon} alt=""/></Link>
                </div>
                
            </div>

        </main>
        <Footer />

    </>
  )
}

export default Main