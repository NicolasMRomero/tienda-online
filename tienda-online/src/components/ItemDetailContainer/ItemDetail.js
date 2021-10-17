import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

export const ItemDetail = ({id, name, description, img, price, category}) => {

    const {goBack} = useHistory()

    return (
        <div className="container">  
            <div className="row">  
            <div className="col">  
                <Card.Img variant="bottom" src={img} />
            </div>
            <div className="col">  
            <Card>
                    <Card.Header>{category}</Card.Header>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>$ {price}</Card.Text>
                        <Button variant="primary">COMPRAR</Button>
                    </Card.Body>

                    <Button 
                        className="btn btn-secondary"
                        onClick={() =>  goBack()}
                    >
                        Volver
                    </Button>
                </Card>
            </div>
                
            </div>
        </div>
    )
}
