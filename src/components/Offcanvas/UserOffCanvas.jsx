import { Offcanvas, Button } from 'react-bootstrap';
import { FaHeart, FaBoxOpen, FaUser, FaSignOutAlt, FaStore } from 'react-icons/fa';

const UserOffcanvas = ({ show, onHide, onMyProfile, onFavorites, onShop, onMyProducts, onLogout }) => {
    return (
        <Offcanvas show={show} onHide={onHide} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Mi cuenta</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='d-flex flex-column gap-3'>

                <Button variant='light' onClick={onMyProfile}>
                    <FaUser className='me-2' /> Mi perfil
                </Button>
                <Button variant='light' onClick={onFavorites}>
                    <FaHeart className='me-2' /> Favoritos
                </Button>
                <Button variant='light' onClick={onShop}>
                    <FaBoxOpen className='me-2' /> Carrito
                </Button>
                <Button variant='light' onClick={onMyProducts}>
                    <FaStore className='me-2' /> Mis productos
                </Button>
                <hr />
                <Button variant='danger' onClick={onLogout}>
                    <FaSignOutAlt className='me-2' /> Cerrar sesión
                </Button>

            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default UserOffcanvas;
