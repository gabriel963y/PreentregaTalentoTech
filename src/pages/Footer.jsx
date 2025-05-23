import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-dark text-light py-4 mt-5'>
      <Container>
        <Row className='text-center text-md-start'>
          <Col md={4} className='mb-3'>
            <h5>Lean<span style={{ color: '#00C9D2' }}>Shop</span></h5>
            <p style={{ color: '#555' }}>
              Tu tienda de confianza para comprar lo que quieras, cuando quieras.
            </p>
          </Col>

          <Col md={4} className='mb-3'>
            <h6>Enlaces útiles</h6>
            <ul className='list-unstyled'>
              <li><a href='/' className='text-light text-decoration-none'>Inicio</a></li>
              <li><a href='/productos' className='text-light text-decoration-none'>Productos</a></li>
              <li><a href='/contacto' className='text-light text-decoration-none'>Contacto</a></li>
            </ul>
          </Col>

          <Col md={4} className='mb-3'>
            <h6>Contacto</h6>
            <p className='mb-1'>📧 contacto@leanshop.com</p>
            <p className='mb-1'>📞 +54 11 1234 5678</p>
            <p>📍 Buenos Aires, Argentina</p>
          </Col>
        </Row>
        <hr className='border-white' />
        <p className='text-center text-muted mb-0'> &copy;{new Date().getFullYear()} Lean<span style={{ color: '#00C9D2' }}>Shop</span>. Todos los derechos reservados.</p>
      </Container>
    </footer >
  );
};

export default Footer;
