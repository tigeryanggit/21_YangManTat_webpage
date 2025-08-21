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

            <h2>飛常男旅</h2>
            <p>本網站主要為你介紹其中4個港人10大熱愛的旅遊景點,唔知你又有無係呢幾個城巿留低幾條腳毛呢? 如果你係第一次去,就要留意下我推的景點啦!!!真係好啱打卡架~~~</p>


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