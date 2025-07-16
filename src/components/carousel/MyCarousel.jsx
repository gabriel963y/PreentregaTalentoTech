import Carousel from 'react-bootstrap/Carousel';
import { images } from '../../utils/consts';


function MyCarousel() {

  return (
    <Carousel fade>
      {images.map(image => (
        <Carousel.Item key={image.id} interval={3000} >
          <img
            className='d-block w-100 img-fluid'
            src={image.url}
            alt={image.title}
            style={{
              filter: 'brightness(0.7)',
              objectFit: 'fill',
              maxHeight: '85vh',                        
            }}
          />

        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
