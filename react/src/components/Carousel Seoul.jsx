import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import { CarouselSeoul } from '../data';



function CarouselGallerySeoul() {
  return (

    <div className="container-carousel">
            <Carousel>
                {
                    CarouselSeoul.map((img)=>(
                        <Carousel.Item>
                        <CarouselImage key={img.id} image={img.image} alt={img.alt} text={img.id}  />
                        <Carousel.Caption>
                        <h3>{img.title}</h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                    
                )}
                

            </Carousel>
    </div>
  );
}


export default CarouselGallerySeoul;


