import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';


function About() {
  return (

    <>
        {/* <Navbar /> */}
            <section class="about" id="about">

                <h2 class="title">關於我們</h2>
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.125736248076!2d114.22507189999999!3d22.311083999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040145637b41a7%3A0xab827da0184aef07!2z5riv5bCI6KeA5aGY5pWZ5a245Lit5b-D!5e0!3m2!1szh-TW!2shk!4v1755489611081!5m2!1szh-TW!2shk" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <br/>
                <p>課程名稱：前端網頁設計</p>
                <p>課程編號：CT288DS004</p>
                <p>學員編號：021</p>
                <p>學員姓名：Yang Man Tat</p>


            </section>

        <Footer /> 
    </>
  )
}

export default About



