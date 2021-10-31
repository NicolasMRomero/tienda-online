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
            className={`btn px-4 ${quantity === 0 ?  "btn-secondary turned-off" : "btn-primary"}`}
            >
                -
            </button>

            <span 
            className="px-3"
            >{ quantity}
            </span>
            

            <button
            onClick={handlerAdd}
            className={`btn px-4 ${quantity === max ?  "btn-secondary turned-off" : "btn-primary"}`}
            >
                +
            </button>
        </div>
    )
}
