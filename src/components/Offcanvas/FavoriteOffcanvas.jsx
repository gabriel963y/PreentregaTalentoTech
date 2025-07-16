import React from 'react'
import { Offcanvas, Row, Col, Button } from 'react-bootstrap';
import MyCard from '../Card/MyCard';
import Swal from 'sweetalert2';
import { useFavoriteStore } from '../../store/useFavoriteStore';

const FavoriteOffcanvas = ({ show, onHide }) => {
    const { favorite, clearFavorites, removeFavoriteById } = useFavoriteStore()

    const handleClearFavorites = () => {
        clearFavorites();
        Swal.fire({
            title: 'Favoritos removidos correctamente',
            icon: 'success',
        })
    }

    const handleRemoveFavorite = (id) => removeFavoriteById(id)

    return (
        <Offcanvas show={show} onHide={onHide} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Favoritos</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {favorite.length === 0 ? (
                    <p>No hay productos para mostrar</p>
                ) : (
                    <Row>
                        {favorite.map(item => (
                            <Col key={item.id} sm={6} className='mb-3'>
                                <MyCard image={item.image} title={item.title} price={item.price} onRemove={() => handleRemoveFavorite(item.id)} />
                            </Col>
                        ))}
                        <Button variant='light' onClick={handleClearFavorites}>Eliminar favoritos</Button>
                    </Row>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default FavoriteOffcanvas