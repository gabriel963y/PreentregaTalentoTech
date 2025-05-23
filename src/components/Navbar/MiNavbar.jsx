import { Button, Card, Col, Container, Nav, Navbar, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { MdShoppingBasket } from 'react-icons/md';
import Navitem from './NavItem'
import { category, MENU_DATA, } from '../../utils/consts';
import BrandLocation from './BrandLocation';
import { useEffect, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoLogOut, IoLogIn } from 'react-icons/io5';

function MiNavbar({ favorite, shop }) {

  const [user, setUser] = useState(localStorage.getItem('token') === 'true')
  const [showShop, setShowShop] = useState(false)
  const [showFavorites, setShowFavorites] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setUser(localStorage.getItem('token') === 'true')

    const handleStorageChange = () => setUser(localStorage.getItem('token') === 'true')

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])




  const handleAuthClick = () => {
    if (user) {
      localStorage.removeItem('token');
      setUser(false)
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  let total = 0
  for (let i = 0; i < shop.length; i++) {
    total += shop[i].price
  }

  return (
    <>
      <Navbar expand='lg' className='shadow-sm border-bottom '>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <BrandLocation />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto align-items-lg-center'>
              <div className='d-flex gap-1 flex-column flex-lg-row'>
                {MENU_DATA.map(menu => (
                  <Navitem key={menu.to} to={menu.to} icon={menu.icon} children={menu.children} className='me-3' />
                ))}
              </div>

              <NavDropdown title='Categorías' id='basic-nav-dropdown' className='mb-3 mb-lg-0'>
                {category.map(item => (
                  <NavDropdown.Item key={item}>{item}</NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Nav className='ms-auto'>
              <div className='d-flex justify-content-between align-items-center'>
                {user && (
                  <>
                    <Button variant='link' className='m-1' onClick={() => setShowFavorites(true)} >
                      <MdFavorite size={25} color='red' />
                    </Button>

                    <Button variant='link' className='m-1' onClick={() => setShowShop(true)}>
                      <MdShoppingBasket size={25} color='black' />
                    </Button>
                  </>
                )}

                {user && (
                  <Link to='/perfil' className='m-2'><FaRegUserCircle size={25} color='black' /></Link>
                )}
                <Button
                  onClick={handleAuthClick}
                  variant='none'
                  size='sm'
                  className='shadow-none'
                >
                  {user ? <IoLogOut size={30} color='black' /> : <IoLogIn size={30} color='black' />}
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Favorite */}
      <Offcanvas show={showFavorites} onHide={() => setShowFavorites(false)} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Favoritos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {favorite.length === 0 ? (
            <p>No hay productos para mostrar</p>
          ) : (
            <>
            <Row>
              {favorite.map(item => (
                <Col key={item.id} xs={6} className='mb-3'>
                  <Card className='p-2 h-100'>
                    <Card.Img variant='top' src={item.image} alt={item.title} />
                    <Card.Body>
                      <Card.Title >{item.title}</Card.Title>
                      <Card.Text className='text-muted'>{item.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      {/* Shop */}
      <Offcanvas show={showShop} onHide={() => setShowShop(false)} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compra</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {shop.length === 0 ? (
            <p>No hay productos para mostrar</p>
          ) : (
            <>
              <Row>
                {shop.map(item => (
                  <Col key={item.id} xs={6} className='mb-3'>
                    <Card className='p-2 h-100'>
                      <Card.Img variant='top' src={item.image} alt={item.title} />
                      <Card.Body>
                        <Card.Title className='fs-6'>{item.title}</Card.Title>
                        <Card.Text className='text-muted'>${item.price}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <hr />
              <Row>
                <div className='d-flex justify-content-between fw-bold align-items-center'>
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                  <Button>Realizar compra</Button>
                </div>
              </Row>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MiNavbar;