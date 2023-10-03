import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <h1>Ecommerce</h1>
            </Link>
            <div>
                <NavLink to="/category/Ropa" activeClassName="active">Ropa</NavLink>
                <NavLink to="/category/Calzado" activeClassName="active">Calzado</NavLink>
                <NavLink to="/category/Accesorios" activeClassName="active">Accesorios</NavLink>
            </div>            <CartWidget />
        </nav>
    );
}

export default NavBar;