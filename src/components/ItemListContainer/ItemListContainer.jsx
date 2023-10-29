import { useState, useEffect } from 'react';

import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams();



    useEffect(() => {
        setLoading(true)
        const coleccionProductos = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
        getDocs(coleccionProductos)
            .then((res) => {
                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProducts(list)
            })

            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])


    return (
        <div>
            {
                loading ? <p>Cargando...</p>
                    : <div>
                        <h1>{greeting} <span> {categoryId && categoryId} </span> </h1>
                        <ItemList products={product} />
                    </div>
            }
        </div>

    );
}

export default ItemListContainer;
