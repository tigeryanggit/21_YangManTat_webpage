import React from 'react'
import logo from "/src/assets/Logo.png";

function Navbar() {
  return (
    
    <nav class="container-nav">
        <div class="nav-logo">
            <img src={logo} alt=""/>
        </div>

        <div class="nav-menu">
            <ul>
                <li><a href=""><i class="fa-solid fa-house"></i></a></li>
                <li><a href="">東京</a></li>
                <li><a href="">首爾</a></li>
                <li><a href="">曼谷</a></li>
                <li><a href="">倫敦</a></li>
                <li><a href="#about">關於</a></li>
            </ul>
        </div>


        <div class="nav-burger">
            <a href=""><i class="fa-solid fa-bars fa-2x"></i></a>
        </div>

    </nav>


  )
}

export default Navbar