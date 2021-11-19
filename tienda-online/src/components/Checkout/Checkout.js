import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { UIContext } from "../../context/UIContext"
import Animation from "../Animation/Animation"
import { generateOrder } from '../../firebase/generateOrder'
import Swal from "sweetalert2"
import EmptyCart from "../EmptyCart/EmptyCart"

export const Checkout = () => {

    const {loading, setLoading} = useContext(UIContext)

    const {cart, calculateTotal, emptyCart} = useContext(CartContext)

    const [values, setValues] = useState({
        name: '',
        last_name: '',
        email: '',
        phone: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if ((values.name.length < 3) || (values.email.length < 3) || (values.last_name.length < 3)){
            Swal.fire({
                icon:  'error',
                title: 'Field required',
                text: 'Please, complete this field'
            })
            return
        }

        setLoading(true)

        generateOrder(values, cart, calculateTotal())
        .then((res) => {
            Swal.fire({
                icon:  'success',
                title: 'Order registered',
                text: `Keep your purchase id: ${res}`,
                willClose: () => {
                    emptyCart()
                }
            })
        })
        .catch((err) => {
            Swal.fire({
                icon:  'error',
                title: 'No products with stock',
                text: `There's no stock of: ${err.map(el => el.name).join(', ')}`
            })
        })
        .finally(() => {
            setLoading(false)
        })
    }


    return (
        <>
        {loading && <Animation/>}

        {
            (cart.length === 0)
            ?<EmptyCart/>
            :
            <div>
                <h2>Checkout</h2>
                <hr/>
                <div className="container my-5">
                    <form 
                    onSubmit={handleSubmit}
                    style={{ width: '35rem', margin:'auto' }}
                    >
                        <h2>Billing Details</h2>
                        <input
                            className="form-control my-2"
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            />
                        {values.name.length === 0 && <small>This field is required</small>}

                        <input
                            className="form-control my-2"
                            type="text"
                            placeholder="Last name"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleInputChange}
                            />
                        {values.last_name.length === 0 && <small>This field is required</small>}

                        <input
                            className="form-control my-2"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            />
                        {values.email.length === 0 && <small>This field is required</small>}

                        <input
                            className="form-control my-2"
                            type="tel"
                            placeholder="Phone"
                            name="phone"
                            value={values.phone}
                            onChange={handleInputChange}
                            />
                        {values.phone.length === 0 && <small>This field is required</small>}
                        <br></br>
                        <button 
                        className="btn btn-success my-4" 
                        type="submit" 
                        disabled={loading}
                        >
                            Finish
                        </button>
                    </form>
                </div>
            </div>
        }



        </>
    )
}
