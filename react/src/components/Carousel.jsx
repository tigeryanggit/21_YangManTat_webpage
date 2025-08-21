import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import { CarouselTokyo } from '../data';

function UncontrolledExample() {
  return (

    <div className="container-carousel">
            <Carousel>
                {
                    CarouselTokyo.map((img)=>(
                        <Carousel.Item>
                        <CarouselImage key={img.id} image={img.image} alt={img.alt} text={img.id}  />
                        <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                    
                )}
                

            </Carousel>
    </div>
  );
}

export default UncontrolledExample;


