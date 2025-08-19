import React from 'react'
import logo from "/src/assets/Logo.png";

function Navbar() {
  return (
    
    <nav className="container-nav">
        <div className="nav-logo">
            <img src={logo} alt=""/>
        </div>

        <div className="nav-menu">
            <ul>
                <li><a href=""><i className="fa-solid fa-house"></i></a></li>
                <li><a href="">東京</a></li>
                <li><a href="">首爾</a></li>
                <li><a href="">曼谷</a></li>
                <li><a href="">倫敦</a></li>
                <li><a href="#about">關於</a></li>
            </ul>
        </div>


        <div className="nav-burger">
            <a href=""><i className="fa-solid fa-bars fa-2x"></i></a>
        </div>

    </nav>


  )
}

export default Navbar