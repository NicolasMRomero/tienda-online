import React from 'react'
import { Item } from './Item'

export const ItemList = ({item = []}) => {
    return (
        <div className="row">  
            {
                item.map((item) => <Item {...item} key={item.id}/>)
            }
        </div>
    )
}
