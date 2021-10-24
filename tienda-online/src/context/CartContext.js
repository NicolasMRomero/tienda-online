import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ( {children }) => {


    const [cart, setCart] = useState ([init])

    const addToCart =  (item) => {
        setCart( [ ...cart, item])
      }
    
      const removeItem  = (itemId) => {
        const newCart = cart.filter((prod) => prod.id !== itemId)
        setCart(newCart)
      }
    
      const calculateQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
      }

      const calculateTotal = () =>{
          return cart.reduce((acc, prod) => acc +prod.quantity * prod.price, )
      }
    
      const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId)
      }

      const emptyCart = () => {
        setCart([])
      }
    
    
    useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    return (
        <CartContext.Provider value={{
             cart,
             addToCart,
             removeItem,
             calculateQuantity,
             emptyCart,
             isInCart,
             calculateTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}