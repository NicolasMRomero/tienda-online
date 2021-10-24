import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({id, name, description, img, price, category}) => {
    return (
        <Card style={{ width: '20rem', margin: 'auto' }}>
        <Card.Img variant="bottom" src={img} />
            <Card.Header>{category}</Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>$ {price}</Card.Text>
                <Link to={`/detalle/${id}`}>
                    <Button variant="primary">VER DETALLE</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
