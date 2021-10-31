import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import { Loader } from "../Loader/Loader.js"
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const {loading, setLoading} = useContext(UIContext)

    const {itemId} = useParams()

    useEffect(() => {

        setLoading(true)

        const db = getFirestore()
        const productsList = db.collection('productos-tienda-online')
        const item = productsList.doc(itemId)
        
        item.get()
        .then((doc) => {
            setItem({
                id: doc.id,
                ...doc.data()
            })
           })
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false)
        })


    }, [itemId, setLoading])

    return (
        <section className="container my-5">
            {
                loading  
                ? 
                <Loader/> 
                : <ItemDetail {...item}/>
            }
        </section>
    )
}
