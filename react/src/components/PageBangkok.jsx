import React from 'react';
import Navbar from './Navbar';
import HistoryBangkok from './HistoryBangkok';
import WeatherBangkok from './WeatherBangkok'; 
import SightBangkok from './SightBangkok';
import WebBangkok from './ＷebBangkok';
import Footer from './Footer';
import { Nav } from 'react-bootstrap';



function PageBangkok() {
  return (
        

    <div className="bangkok">

        {/* <Navbar /> */}
        <HistoryBangkok />
        <WeatherBangkok />
        <SightBangkok />
        <WebBangkok />
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

export default PageBangkok