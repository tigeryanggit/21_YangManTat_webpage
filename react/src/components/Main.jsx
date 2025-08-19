import React from 'react'
import maingtokyo from "../assets/main/main-tokyo.png";
import mainseoul from "../assets/main/main-seoul.png";
import mainbangkok from "../assets/main/main-bangkok.png";
import mainlondon from "../assets/main/main-london.png";


function Main() {
  return (

    <main class="container-main">
        <div class="mobile-list">
            <ul>
                <li><a href="">首頁</a></li>
                <li><a href="">東京</a></li>
                <li><a href="">首爾</a></li>
                <li><a href="">曼谷</a></li>
                <li><a href="">倫敦</a></li>
                <li><a href="#about">關於</a></li>
            </ul>
        </div>

        <div class="container-grid">

            <div class="img-main img-japan">
                <a href=""><img src={maingtokyo} alt=""/></a>
            </div>
            <div class="img-main img-seoul">
                <a href=""><img src={mainseoul} alt=""/></a>
            </div>
            <div class="img-main img-bangkok">
                <a href=""><img src={mainbangkok} alt=""/></a>
            </div>
            <div class="img-main img-london">
                <a href=""><img src={mainlondon} alt=""/></a>
            </div>
            
        </div>

    </main>


  )
}

export default Main