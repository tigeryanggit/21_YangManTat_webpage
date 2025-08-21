import React from 'react';
import Navbar from './Navbar';
import HistoryBangkok from './HistoryBangkok';
import WeatherBangkok from './WeatherBangkok'; 
import SightBangkok from './SightBangkok';
import WebBangkok from './ＷebBangkok';
import Footer from './Footer';
import CarouselGalleryBangkok from './Carousel Bangkok';



function PageBangkok() {
  return (
        

    <div className="bangkok">

        {/* <Navbar /> */}
        <HistoryBangkok />
        <WeatherBangkok />
        <SightBangkok />
        <CarouselGalleryBangkok />
        <WebBangkok />
        <Footer />

    </div>       

  )
}

export default PageBangkok