import React from 'react'

function ＷebLondon() {
  return (
            
        <>
        <br />
          <div className="website">
            <h2 className='title'>官方網站</h2>
            <a 
                // href="https://www.visitlondon.com/"
                onClick={() => window.open("https://www.visitlondon.com/")} 
                ><i class="fa-solid fa-hand-point-right"></i>VISIT LONDON</a>
          </div>
        </>
  )
}

export default ＷebLondon