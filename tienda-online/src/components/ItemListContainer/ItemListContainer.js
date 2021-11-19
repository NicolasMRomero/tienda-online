import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { UIContext } from "../../context/UIContext.js"
import { getFirestore } from "../../firebase/config.js"
import Animation from "../Animation/Animation"
import { ItemList } from "./ItemList.js"

export const ItemListContainer = () => {

    const [item, setItems] = useState([])

    const {loading, setLoading} = useContext(UIContext)

    const {categoryId} =  useParams()

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const productsList = categoryId 
        ? db.collection('productos-tienda-online').where('category','==', categoryId) 
        : db.collection('productos-tienda-online')

            productsList.get()
            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data()   }
                })
                
                setItems(newItems)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [categoryId, setLoading])

    return (
        <section className="container my-5">
            <h1>Products list</h1>
            <hr/>
            {loading 
            ? <Animation/> 
            : <ItemList item={item}/>
            }
        </section>
    )
}