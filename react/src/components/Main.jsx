import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import maintokyo from "../assets/main/main-tokyo.png";
import mainseoul from "../assets/main/main-seoul.png";
import mainbangkok from "../assets/main/main-bangkok.png";
import mainlondon from "../assets/main/main-london.png";


function Main() {
  return (

    <>
        {/* <Navbar /> */}
        <main className="container-main">
            <div className="mobile-list">
                <ul>
                    <li><a href="">首頁</a></li>
                    <li><a href="">東京</a></li>
                    <li><a href="">首爾</a></li>
                    <li><a href="">曼谷</a></li>
                    <li><a href="">倫敦</a></li>
                    <li><a href="#about">關於</a></li>
                </ul>
            </div>

            <div className="container-grid">

                <div className="img-main img-japan">
                    <a href=""><img src={maintokyo} alt=""/></a>
                </div>
                <div className="img-main img-seoul">
                    <a href=""><img src={mainseoul} alt=""/></a>
                </div>
                <div className="img-main img-bangkok">
                    <a href=""><img src={mainbangkok} alt=""/></a>
                </div>
                <div className="img-main img-london">
                    <a href=""><img src={mainlondon} alt=""/></a>
                </div>
                
            </div>

        </main>
        <Footer />

    </>
  )
}

export default Main