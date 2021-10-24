import {useState, useContext} from 'react'
import { Card, Button, NavLink } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

export const ItemDetail = ({id, name, description, img, price, category, stock}) => {

    const {goBack} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [quantity, setQuantity] = useState(0)

    const handleAdd = () => {
        const newItem = {
            id,
            name, 
            price, 
            category, 
            quantity 
        }

        addToCart(newItem)
    }

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

                        { isInCart(id) 
                        ? <NavLink to="/cart" className="btn btn-success">Finalizar mi compra</NavLink> 
                        :<>

                        <ItemCount quantity={quantity} modify={setQuantity} max={stock}/>
                        <Button 
                        variant="primary"
                        onClick={handleAdd}
                        >
                            COMPRAR
                        </Button>
                        </>

                    }
                        
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
