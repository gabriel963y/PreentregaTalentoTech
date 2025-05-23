import Carousel from 'react-bootstrap/Carousel';
import { images } from '../../utils/conts';


function ProductCarousel() {

  return (
    <Carousel fade>
      {images.map(image => (
        <Carousel.Item key={image.id} interval={3000}>
          <img
            className='d-block w-100 h-100 img-fluid'
            src={image.url}
            alt={image.title}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
