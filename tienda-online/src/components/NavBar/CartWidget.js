import {FaShoppingCart} from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export const CartWidget = () => {

    const { calculateQuantity, cart } = useContext(CartContext)

    return (
        <div style={{
            display: calculateQuantity() === 0 ? "none" : "block"
        }}>
            <FaShoppingCart size={22} className="widget"/>
            {
                cart.length === 0
                ? <span></span>
                :
            <span> {calculateQuantity()}</span>
            }
        </div>
    )
}