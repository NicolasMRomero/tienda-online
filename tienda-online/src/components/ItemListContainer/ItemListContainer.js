import React, {useEffect, useState} from "react"
import { pedirProductos } from "../../helpers/pedirProductos.js"
import { ItemList } from "./ItemList.js"

export const ItemListContainer = ({greeting}) => {

    const [item, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        pedirProductos()
            .then((res) => {
                setItems(res)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="container my-5">
            <h1>Listado de productos</h1>
            <hr/>
            {loading 
            ? <h3>Cargando...</h3> 
            : <ItemList item={item}/>
            }
        </section>
    )
}