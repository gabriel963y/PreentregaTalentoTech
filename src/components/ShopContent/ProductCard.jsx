import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import useAuth from '../../hooks/useAuth';
import styled from 'styled-components'
import { useFavoriteStore } from '../../store/useFavoriteStore';
import { useShopStore } from '../../store/useShopStore';



const StyledCard = styled(Card)`
    height: 100%;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.356);
    transition: all .5s ease-in;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.356);
        border: 1px solid #4C2A80;
    }
`

const ProductCard = ({ product }) => {
    const { isAuthenticated } = useAuth();
    const { favorite, toggleFavorite } = useFavoriteStore()
    const { shop, toggleShop } = useShopStore()

    const isFavorite = favorite.some(fav => fav.id === product.id)
    const inCart = shop.some(item => item.id === product.id)


    return (
        <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
            <StyledCard>
                {isAuthenticated && (
                    <div
                        className="position-absolute"
                        style={{ top: '10px', right: '10px', zIndex: 1 }}
                        onClick={() => toggleFavorite(product)}
                    >
                        {isFavorite ? (
                            <MdFavorite size={30} color="red" />
                        ) : (
                            <MdFavoriteBorder size={30} color="red" />
                        )}
                    </div>
                )}

                <div className="text-center p-3">
                    <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ height: '200px', objectFit: 'contain', padding: '1rem' }}
                    />
                </div>

                <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                        <Card.Title className="text-truncate" style={{ fontSize: '0.95rem', fontWeight: 'bold' }}>
                            {product.title}
                        </Card.Title>
                    </div>
                    <Card.Text className="text-muted small" style={{ height: '150px', overflow: 'auto' }}>
                        {product.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                        {isAuthenticated &&
                            <Button variant={inCart ? 'danger' : 'primary'} onClick={() => toggleShop(product)}>
                                {inCart ? 'Quitar' : 'Comprar'}
                            </Button>
                        }
                        <Card.Text className="fw-bold">${product.price}</Card.Text>
                    </div>
                </Card.Body>
            </StyledCard>
        </Col>
    )
}

export default ProductCard