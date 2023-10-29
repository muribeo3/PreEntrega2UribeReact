import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="container">
                <h2 className="text-center">Tu carrito está vacío</h2>
                <Link to="/" className="btn btn-primary">
                    Volver al inicio
                </Link>
            </div>
        );
    }
    return (
        <div>
            {cart.map(p => <CartItem key={p.id} item={p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="btn btn-danger">
                Vaciar carrito
            </button>
            <Link to="/checkout" className="btn btn-success">
                Finalizar compra
            </Link>

        </div>
    )
}

export default Cart;