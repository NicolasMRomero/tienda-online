export const ItemCount = ( {quantity, modify, max}) => {

    const handlerAdd = () => {
        if (quantity < max)
        modify(quantity + 1)
    }

    const handlerSubtract = () => {
        if (quantity > 0) {
            modify(quantity - 1)
        }
    }


    return (
        <div className="my-3">


            <button
            onClick={handlerSubtract}
            className="btn btn-primary px-4"
            >
                -
            </button>

            <span 
            className="px-3"
            >{ quantity}
            </span>
            

            <button
            onClick={handlerAdd}
            className="btn btn-primary px-4"
            >
                +
            </button>
        </div>
    )
}
