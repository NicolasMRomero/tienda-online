import {useState, useContext} from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import './ItemDetail.scss'

export const ItemDetail = ({id, name, description, img, price, category, stock}) => {

    const {goBack, push} = useHistory()

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

        if (quantity > 0){
            addToCart(newItem)
        }
    }

    const ActivateAdd = isInCart(id) ? " my-2 btn success turned-off" : "my-2 btn-success"

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

                        <div className={isInCart(id) && "turned-off"}>

                        <ItemCount quantity={quantity} modify={setQuantity} max={stock}/>
                        <Button 
                            disabled={quantity === 0}
                            onClick={handleAdd}
                            className={ActivateAdd}
                            >
                            AGREGAR
                        </Button>
                        </div>
                    
                        <Link to="/cart" 
                        className={
                            isInCart(id) 
                        ? "btn btn-success" 
                        : "btn btn-success turned-off"
                        }
                        >
                        Finalizar mi compra
                        </Link> 

                    
                        
                    </Card.Body>

                    <button 
                        className="btn btn-primary mx-4 my-2"
                        onClick={() =>  goBack()}
                    >
                        Volver
                    </button>
                    <button 
                        className="btn btn-secondary mx-4 my-2"
                        onClick={() => push("/")}
                    >
                        Volver al inicio
                    </button>

                    
                </Card>
            </div>
                
            </div>
        </div>
    )
}
