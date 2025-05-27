import React from 'react'
import { Card } from 'react-bootstrap'

const MyCard = ({ image, title, price }) => {
    return (
        <Card className='p-2 h-100 border-1'>
            <Card.Img variant='top' src={image} alt={title} />
            <Card.Body>
                <Card.Title className='text-truncate' >{title}</Card.Title>
                <Card.Text className='text-muted'>${price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MyCard