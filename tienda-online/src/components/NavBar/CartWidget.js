import {FaShoppingCart} from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export const CartWidget = () => {

    const { calculateQuantity } = useContext(CartContext)

    return (
        <div>
            <FaShoppingCart className="widget"/>
            <span>{calculateQuantity()}</span>
        </div>
    )
}