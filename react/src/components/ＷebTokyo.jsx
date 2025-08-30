import React from 'react'

function ＷebTokyo() {
  return (
            
        <>
        <br />
          <div className="website">
            <h2 className='title'>官方網站</h2>
            <a 
                // href="https://www.gotokyo.org/tc/index.html"
                onClick={() => window.open("https://www.gotokyo.org/tc/index.html")} 
                ><i class="fa-solid fa-hand-point-right"></i>東京旅遊官方網站GO TOKYO</a>
          </div>
        </>
  )
}

export default ＷebTokyo