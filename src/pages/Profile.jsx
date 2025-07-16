import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { titles } from '../utils/consts';
import { useFavoriteStore } from '../store/useFavoriteStore';
import { useShopStore } from '../store/useShopStore';
import { useUserProductsStore } from '../store/useUserProductsStore';

const Perfil = () => {
  const { favorite } = useFavoriteStore()
  const { shop } = useShopStore()
  const { userProducts } = useUserProductsStore()

  return (
    <>
      <Helmet>
        <title>{titles.myProfile}</title>
      </Helmet>
      <Container className='py-5'>
        <Card className='p-4 shadow'>
          <Row className='align-items-center'>
            <Col md={4} className='text-center'>
              <FaUserCircle size={150} color='#7537C1' />
            </Col>
            <Col md={8}>
              <h3 className='mb-3'>Mi Perfil</h3>
              <p><strong>Email:</strong> test@lean.com</p>
              <p><strong>Favoritos:</strong> {favorite?.length || 0} productos</p>
              <p><strong>Carrito:</strong> {shop?.length || 0} productos</p>
              <p><strong>Mis productos: </strong> {userProducts?.length || 0} productos</p>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default Perfil;
