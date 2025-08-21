import React from 'react';
import Navbar from './Navbar';
import HistoryLondon from './HistoryLondon';
import WeatherLondon from './WeatherLondon'; 
import SightLondon from './SightLondon';
import WebLondon from './ＷebLondon';
import Footer from './Footer';
import CarouselGalleryLondon from './Carousel London';


function PageLondon() {
  return (
        

    <div className="london">

        {/* <Navbar /> */}
        <HistoryLondon />
        <WeatherLondon />
        <SightLondon />
        <CarouselGalleryLondon />
        <WebLondon />
        <Footer />


    </div>       

  )
}

export default PageLondon