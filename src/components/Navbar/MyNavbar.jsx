import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { IoLogIn, IoPersonCircle } from 'react-icons/io5';
import FavoriteOffCanvas from '../Offcanvas/FavoriteOffcanvas'
import ShopOffcanvas from '../Offcanvas/ShopOffcanvas';
import Navitem from './NavItem';
import BrandLocation from './BrandLocation';
import { MENU_DATA } from '../../utils/consts';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { UserDropdown } from './UserDropdown';
import UserOffcanvas from '../Offcanvas/UserOffCanvas'


function MyNavbar() {
  const [showShop, setShowShop] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showUserCanvas, setShowUserCanvas] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();


  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Navbar expand='lg' className='shadow-sm border-bottom'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <BrandLocation />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto flex-column flex-lg-row gap-2 text-center text-lg-start'>
              {MENU_DATA.map((menu) => (
                <Navitem key={menu.to} to={menu.to} icon={menu.icon} className='me-lg-3'>
                  {menu.children}
                </Navitem>
              ))}
            </Nav>

            <Nav className='ms-auto mt-3 mt-lg-0'>
              <div className='d-flex justify-content-center justify-content-lg-end'>
                {isAuthenticated ? (
                  <>
                    <div className='d-none d-lg-block'>
                      <UserDropdown
                        onFavorites={() => setShowFavorites(true)}
                        onShop={() => setShowShop(true)}
                        onMyProducts={() => navigate('/mis-productos')}
                        onLogout={handleAuthClick}
                        onMyProfile={() => navigate('/perfil')}
                      />
                    </div>
                    <div className='d-lg-none'>
                      <Button variant='none' onClick={() => setShowUserCanvas(true)} className='shadow-none'>
                        <IoPersonCircle size={33} color='black' />
                      </Button>
                    </div>
                  </>
                ) : (
                  <Button
                    onClick={handleAuthClick}
                    variant='none'
                    size='sm'
                    className='shadow-none'
                  >
                    <IoLogIn size={33} color='black' />
                  </Button>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <FavoriteOffCanvas show={showFavorites} onHide={() => setShowFavorites(false)} />
      <ShopOffcanvas show={showShop} onHide={() => setShowShop(false)} />
      <UserOffcanvas
        show={showUserCanvas}
        onHide={() => setShowUserCanvas(false)}
        onFavorites={() => {
          setShowFavorites(true);
          setShowUserCanvas(false);
        }}
        onShop={() => {
          setShowShop(true);
          setShowUserCanvas(false);
        }}
        onMyProducts={() => {
          navigate('/mis-productos');
          setShowUserCanvas(false);
        }}
        onLogout={() => {
          handleAuthClick();
          setShowUserCanvas(false);
        }}
        onMyProfile={() => {
          navigate('/perfil');
          setShowUserCanvas(false);
        }}
      />
    </>
  );
}

export default MyNavbar;
