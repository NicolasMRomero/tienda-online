import { getFirestore } from './config'
import firebase from 'firebase'
import 'firebase/firestore'

export const generateOrder =  (data, cart, total) => {

    return new Promise(async (resolve, reject) => {

        const order = {
            buyer: data,
            items: cart.map((el) => ({id: el.id, precio: el.price, cantidad: el.quantity})),
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const db = getFirestore()
        const orders = db.collection('orders')
        const itemsToUpdate = db.collection('productos-tienda-online')
            .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(el => el.id))
            
        const query = await itemsToUpdate.get()
        const batch = db.batch()

        const outOfStock = []

        query.docs.forEach((doc) => {
            const itemInCart = cart.find(prod => prod.id === doc.id)

            if (doc.data().stock >= itemInCart.quantity) {
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.quantity})
            } else {
                outOfStock.push({...doc.data(), id: doc.id})
            }
        })

        if (outOfStock.length === 0) {
            orders.add(order)
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
                })
                .catch((err) => {
                    reject(err)
                })
        } else {
           reject(outOfStock)
        }
    })   
}