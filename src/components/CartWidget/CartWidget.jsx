

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {

    const { cart } = useContext(CartContext);


    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <Link to="/cart" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='icono de carrito' width={50} height={50} />
            {totalQuantity}
        </Link>

    );
}

export default CartWidget;