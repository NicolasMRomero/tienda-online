import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const Item = ({id, name, description, img, price}) => {
    return (
        <Card style={{ width: '20rem', margin: 'auto' }}>
        <Card.Img variant="bottom" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>$ {price}</Card.Text>
            <Button variant="primary">COMPRAR</Button>
        </Card.Body>
        </Card>
    )
}
