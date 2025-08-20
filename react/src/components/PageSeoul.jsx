import React from 'react';
import Navbar from './Navbar';
import HistorySeoul from './HistorySeoul';
import WeatherSeoul from './WeatherSeoul'; 
import SightSeoul from './SightSeoul';
import WebSeoul from './ＷebSeoul';
import Footer from './Footer';
import { Nav } from 'react-bootstrap';



function PageSeoul() {
  return (
        

    <div className="seoul">

        {/* <Navbar /> */}
        <HistorySeoul />
        <WeatherSeoul />
        <SightSeoul />
        <WebSeoul />
        <Footer /> 

        <section className="gallery">

            {/* <Carousel>
            <Carousel.Item>
                <ExampleCarouselImage text="First slide" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Second slide" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>  */}
        </section>    



    </div>       

  )
}

export default PageSeoul