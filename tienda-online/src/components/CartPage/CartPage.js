import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrash } from "react-icons/fa"
import { useHistory } from 'react-router'
// import { Redirect } from "react-router-dom"

export const CartPage = () => {

    const { cart, removeItem, emptyCart, calculateTotal } = useContext(CartContext)
    const {push} = useHistory()

    return (
        <section className="container my-5">
            <>
            {
                cart.length === 0
                ? 
                // <Redirect to="/"/>
                <>
                  <h3>
                     No products added
                  </h3>
                </>
                :
                <>
                <h1>Cart detail</h1>
                <hr/>
                {
                    cart.map((prod) => (
                        <div>
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


                </>
            }
            
            <hr/>
            <h3>TOTAL: {calculateTotal()}</h3>
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
