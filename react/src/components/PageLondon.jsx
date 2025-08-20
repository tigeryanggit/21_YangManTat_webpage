import React from 'react';
import Navbar from './Navbar';
import HistoryLondon from './HistoryLondon';
import WeatherLondon from './WeatherLondon'; 
import SightLondon from './SightLondon';
import WebLondon from './ＷebLondon';
import Footer from './Footer';
import { Nav } from 'react-bootstrap';



function PageLondon() {
  return (
        

    <div className="london">

        {/* <Navbar /> */}
        <HistoryLondon />
        <WeatherLondon />
        <SightLondon />
        <WebLondon />
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

export default PageLondon