import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { db } from "../../services/firebase";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, cartTotal, clear } = useContext(CartContext)
    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.name && !user.phone) {
            alert('Completa los campos')
        } else {
            let order = {
                user,
                item: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
        }

    }
    return (
        <div className="contenedorCheck">
            {orderId !== ''
                ? <div className="datosCheck">
                    <h2>Felicitaciones! Tu orden fue generada con exito!</h2>
                    <h5>Su id de registro es: {orderId}</h5>
                    <button> <Link to='/' className="BotonBack"><h3>Ver más productos</h3></Link></button>
                </div>
                : <div>
                    <h2>Terminar compra</h2>
                    <h5>Por favor llenar con sus datos</h5>

                    <form onSubmit={finalizarCompra}>
                        <div className="">
                            <label className="">Nombre Completo:</label>
                            <input onChange={datosComprador} className="" type="text" placeholder="Nombre y apellido" name="name" />
                        </div>
                        <div className="">
                            <label className="">Telefono:</label>
                            <input onChange={datosComprador} className="" type="number" placeholder="5433647777" name="phone" />
                        </div>
                        <div className="">
                            <label className="">Email</label>
                            <input onChange={datosComprador} className="" type="email" placeholder="email@email.com" name="mail" />
                        </div>
                        <div className="">
                            <label className="">Repita su Email</label>
                            <input className="" type="email" placeholder="email@email.com" name="mail" onChange={((e) => setValidateEmail(e.target.value))} />
                        </div>
                        <button className="botonOrden" type="submit" disabled={validateEmail !== user.mail}>Generar orden</button>
                    </form>

                </div>}
        </div>
    )
}

export default Checkout