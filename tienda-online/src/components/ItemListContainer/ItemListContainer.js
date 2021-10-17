import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { pedirProductos } from "../../helpers/pedirProductos.js"
import { ItemList } from "./ItemList.js"

export const ItemListContainer = ({greeting}) => {

    const [item, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} =  useParams()

    useEffect(() => {
        setLoading(true);
        pedirProductos()
            .then((res) => {

                if (categoryId) {
                    setItems( res.filter( prod => prod.category === categoryId ))
                } else (
                    setItems(res) 
                )

            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

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