import { Button, Dropdown } from 'react-bootstrap';
import { FaBoxOpen, FaRegUserCircle } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { FaRegUser, FaHeart, FaStore } from 'react-icons/fa';
import styled from 'styled-components';

const LogoutButton = styled.button`
    width: 100%;
    text-align: center;
    font-weight: bold;
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 0.5rem 1rem;

    &:hover{
        background-color: #c82333;
        color: white;
    }
`


export const UserDropdown = ({ onFavorites, onShop, onMyProducts, onLogout, onMyProfile }) => {
    return (
        <Dropdown align='end'>
            <Dropdown.Toggle
                variant='light'
                id='dropdown-user'
                className='d-flex align-items-center border-0 bg-transparent shadow-none'
            >
                <FaRegUserCircle size={25} color='black' />
            </Dropdown.Toggle>
            <Dropdown.Menu className='shadow-sm rounded p-0'>
                <Dropdown.Item onClick={onMyProfile}>
                    <FaRegUser size={18} className='me-2' />
                    Mi perfil
                </Dropdown.Item>
                <Dropdown.Item onClick={onFavorites}>
                    <FaHeart size={18} className='me-2' />
                    Favoritos
                </Dropdown.Item>
                <Dropdown.Item onClick={onShop}>
                    <FaBoxOpen size={18} className='me-2' />
                    Carrito
                </Dropdown.Item>
                <Dropdown.Item onClick={onMyProducts}>
                    <FaStore size={18} className='me-2' />
                    Mis productos
                </Dropdown.Item>
                <Dropdown.Item
                    as='div'
                    className='p-0'
                >
                    <LogoutButton onClick={onLogout} className='p-0 d-flex align-items-center justify-content-center py-2'>
                        <IoLogOut size={20} className='me-2' />
                        Cerrar sesión
                    </LogoutButton>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    );
};
