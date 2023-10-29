import { Link } from "react-router-dom";



const Item = ({ id, name, category, price, stock, img }) => {

    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
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
