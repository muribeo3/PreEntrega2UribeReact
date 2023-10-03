import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, category, price, stock }) => {
    return (
        <article>
            <header>
                <h2>{name}</h2>

            </header>
            <section>
                <p>{category}</p>
                <p>${price}</p>
                <p>Disponible: {stock}</p>
            </section>
            <footer>
                <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            </footer>
        </article>)
}

export default ItemDetail;