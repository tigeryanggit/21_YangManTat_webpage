import React from 'react'

import { sightsLondon } from '../data';
import Sight from './Sight';

function SightLondon() {
  return (
        <section className="container-sight">


                <h2 className="title">新手必到精選景點 - 倫敦</h2>        


                {sightsLondon.map((sight) => (
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

export default SightLondon