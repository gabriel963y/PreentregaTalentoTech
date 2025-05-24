import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const Perfil = ({ favorite, shop }) => {

  return (
    <Container className='py-5'>
      <Card className='p-4 shadow'>
        <Row className='align-items-center'>
          <Col md={4} className='text-center'>
            <FaUserCircle size={100} color='#6c757d' />
          </Col>
          <Col md={8}>
            <h3 className='mb-3'>Mi Perfil</h3>
            <p><strong>Email:</strong> test@lean.com</p>
            <p><strong>Favoritos:</strong> {favorite?.length || 0} productos</p>
            <p><strong>Carrito:</strong> {shop?.length || 0} productos</p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Perfil;
