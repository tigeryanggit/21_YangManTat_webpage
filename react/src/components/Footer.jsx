import React from 'react'

function Footer() {
  return (
    
        <section class="footer">
            <ul>
                <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a></li>            
            </ul>

            <p>Copyright &copy; <span id="date">{new Date().getFullYear()}</span> All Rights Reserved</p>

        </section>



  )
}

export default Footer