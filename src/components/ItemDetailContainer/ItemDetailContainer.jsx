
import { db } from '../../services/firebase'

import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className='detail-container'>
            {loading ? <p>cargando...</p> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer;