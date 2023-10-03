import { Link } from "react-router-dom";



const Item = ({ id, name, category, price, stock }) => {

    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <section>
                <p>
                    {category}
                </p>
                <p>
                    ${price}
                </p>
                <p>
                    Disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>);

}

export default Item;
