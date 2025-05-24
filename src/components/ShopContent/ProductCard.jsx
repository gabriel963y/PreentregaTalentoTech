import React from 'react'
import { Card, Col,  Button  } from 'react-bootstrap';
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';

const ProductCard = ({ product, favorite, toggleFavorite, addToShop, shop}) => {

    const isLogged = localStorage.getItem('token') === 'true';

    return (
        <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card className='h-100 position-relative' style={{ borderRadius: '1rem', boxShadow: '0 4px 10px rgba(0,0,0,0.08)', transition: 'transform 0.5s ease, box-shadow 0.2s ease' }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.08)';
                }}
            >
                {
                    isLogged && (
                        <div className='position-absolute' style={{ top: '10px', right: '10px', zIndex: 1, }} onClick={() => toggleFavorite(product)}>
                            {favorite.some(fav => fav.id === product.id) ? (<MdFavorite size={30} color='red' />) : (<MdFavoriteBorder color='red' size={30} />)}
                        </div>
                    )
                }
                <div className='text-center p-3'>
                    <Card.Img variant='top' src={product.image} style={{ height: '200px', objectFit: 'contain' }} />
                </div>
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <div>
                        <Card.Title className='text-truncate' style={{ fontSize: '0.95rem', fontWeight: 'bold' }}>{product.title}</Card.Title>
                    </div>
                    <Card.Text className='text-muted small' style={{ height: '150px', overflow: 'auto', }}>{product.description}</Card.Text>
                    <div className='d-flex justify-content-between align-items-center mt-auto'>
                        <Button variant={shop.some(item => item.id === product.id) ? 'danger' : 'primary'} onClick={() => addToShop(product)}>
                            {shop.some(item => item.id === product.id) ? 'Quitar' : 'Comprar'}
                        </Button>
                        <Card.Text className='fw-bold'>${product.price}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard