import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrash } from "react-icons/fa";

export const CartPage = () => {

    const { cart, removeItem, emptyCart, calculateTotal } = useContext(CartContext)
    console.log(cart)
    return (
        <section className="container my-5">
            <h1>Resumen del pedido</h1>
            <hr/>
            {
                cart.map((prod) => (
                    <div>
                        <h4>
                            {prod.name}
                        </h4>
                        <h5>
                            Cantidad : {prod.quantity}
                        </h5>
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

            <hr/>
            <h3>TOTAL: {calculateTotal()}</h3>
            <button
            className="btn btn-danger"
            onClick={emptyCart}
            >
                Vaciar carrito
            </button>
        </section>
    )
}
