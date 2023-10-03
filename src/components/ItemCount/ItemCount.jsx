import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);


    const add = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const remove = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div className="Counter">
            <div className="Controls">
                <button onClick={remove}>-</button>
                <h4>{count}</h4>
                <button onClick={add}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(count)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;