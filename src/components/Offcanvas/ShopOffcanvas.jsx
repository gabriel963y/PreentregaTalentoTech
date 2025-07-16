import React from 'react'
import { Offcanvas, Row, Col, Button, Toast } from 'react-bootstrap';
import MyCard from '../Card/MyCard';
import Swal from 'sweetalert2';
import { useShopStore } from '../../store/useShopStore';

const ShopOffcanvas = ({ show, onHide }) => {
    const shop = useShopStore(state => state.shop);
    const removeFromShop = useShopStore(state => state.removeFromShop);
    const clearShop = useShopStore(state => state.clearShop);
    const getTotal = useShopStore(state => state.getTotal)

    const handleBuy = () => {
        clearShop();
        Swal.fire({
            icon: 'success',
            title: '¡Compra realizada con éxito!',
            text: 'Gracias por su compra. Recibirá un correo con los detalles de su pedido.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Confirmar',
        });
    };

    return (
        <Offcanvas show={show} onHide={onHide} placement='end'>
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
                                <Col key={item.id} sm={6} className='mb-3'>
                                    <MyCard image={item.image} title={item.title} price={item.price} onRemove={() => removeFromShop(item.id)} />
                                </Col>
                            ))}
                        </Row>
                        <hr />
                        <Row>
                            <div className='d-flex justify-content-between fw-bold align-items-center'>
                                <span>Total:</span>
                                <span>${getTotal().toFixed(2)}</span>
                                <Button onClick={handleBuy}>Realizar compra</Button>
                            </div>
                        </Row>
                    </>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ShopOffcanvas