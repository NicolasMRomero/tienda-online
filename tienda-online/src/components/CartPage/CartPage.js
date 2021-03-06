import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrash } from "react-icons/fa"
import { useHistory } from 'react-router'

export const CartPage = () => {

    const { cart, removeItem, emptyCart, calculateTotal } = useContext(CartContext)
    const {push} = useHistory()

    return (
        <section className="container my-5">
            <>
            <h1>Cart detail</h1>
            <hr/>
            {
                cart.length === 0
                ? 
                <>
                  <h3>
                     No products added
                  </h3>
                  <button 
                    className="btn btn-secondary mx-4 my-2"
                    onClick={() => push("/")}
                    >
                    Go to home
                </button>
                </>
                :
                <>
                {
                    cart.map((prod) => (
                        <div className="my-3">
                            <h4>
                                {prod.name}
                            </h4>
                            <h5>
                                Quantity : {prod.quantity}
                            </h5>
                            <h6> 
                                Price: {prod.price * prod.quantity}
                            </h6>
                            <button
                            className="btn btn-danger"
                            onClick={() => removeItem(prod.id)}
                            >
                                <FaTrash/>
                            </button>
                        </div>
                    )
                    )
                }
                <h3>TOTAL: {calculateTotal()}</h3>
                </>
            }
            
            <hr/>
            <button
            className="btn btn-danger"
            onClick={emptyCart}
            >
                Delete products
            </button>
            <button 
                className="btn btn-secondary mx-4 my-2"
                onClick={() => push("/checkout")}
                >
                Go to checkout
            </button>
            </>
        </section>
    )
}
