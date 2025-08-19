import React from 'react'

import { sightsBangkok } from '../data';
import Sight from './Sight';

function SightBangkok() {
  return (
        <section className="container-sight">


                <h2 className="title">新手必到精選景點 - 曼谷</h2>        


                {sightsBangkok.map((sight) => (
                    <Sight 
                        key={sight.id}
                        image={sight.image}
                        title={sight.title}
                        content={sight.content}
                    />


                ))
        
            }
          </section>
    )
}

export default SightBangkok