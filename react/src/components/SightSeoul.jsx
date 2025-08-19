import React from 'react'

import { sightsSeoul } from '../data';
import Sight from './Sight';

function SightSeoul() {
  return (
        <section className="container-sight">


                <h2 className="title">新手必到精選景點 - 首爾</h2>        


                {sightsSeoul.map((sight) => (
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

export default SightSeoul