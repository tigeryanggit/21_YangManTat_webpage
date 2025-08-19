import React from 'react'
import tokyo1 from '../assets/sight/Tokyo/tokyo_ss_1.png';
import tokyo2 from '../assets/sight/Tokyo/tokyo_ss_2.png';
import tokyo3 from '../assets/sight/Tokyo/tokyo_ss_3.png';



function Sight({ image, title, content }) {
  return (
                <div className="card sight">
                    <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body card-body-sight">
                        <h2>{title}</h2>
                        <p className="card-text">{content}</p>
                    </div>
                </div>
  )
}

export default Sight