import React from 'react'
import { Card } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'

const RemoveIcon = styled(AiOutlineClose)`
    color: white;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        opacity: .5;
    }
`

const RemoveIconWrapper = styled.div`
    background-color: #7537C1;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: absolute;
    top: -12px;
    right: -12px;

    display: flex;
    align-items: center;
    justify-content: center;
`


const MyCard = ({ image, title, price, onRemove }) => {
    return (
        <Card className='p-2 h-100 border-1 position-relative'>

            {onRemove && <RemoveIconWrapper><RemoveIcon onClick={onRemove} /></RemoveIconWrapper>}
            <Card.Img variant='top' src={image} alt={title} />
            <Card.Body>
                <Card.Title className='text-truncate'>{title}</Card.Title>
                <Card.Text className='text-muted'>${price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MyCard
