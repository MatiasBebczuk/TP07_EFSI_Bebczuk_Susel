import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Navbar(){
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        async function fetch(){
            await axios.get("https://dummyjson.com/products")
            .then(resp => setCategorias([...new Set(resp.data.products.map(el => el.category))]));
        }

        fetch();
    }, []);

    return(
        <nav>
            <img onClick={_ => {location.pathname = "/TP7_EFSI_Bebczuk_Susel/"}} className="logo" src="/TP7_EFSI_Bebczuk_Susel/logo.png"/>
            <ul>
                <li><Link to="/TP7_EFSI_Bebczuk_Susel/">Home</Link></li>
                <li><Link to="/TP7_EFSI_Bebczuk_Susel/QuienesSomos">Quiénes somos</Link></li>

                <li>
                    <div className="dropdown">
                        <p className="dropbtn"><b>v</b> Productos</p>
                        <div className="dropdown-content">
                            <Link to="/TP7_EFSI_Bebczuk_Susel/Productos">Ver todos</Link>
                            {
                                categorias.map((el, i) => <Link key={i} to={"/TP7_EFSI_Bebczuk_Susel/Categoria/" + el}>{el}</Link>)
                            }
                        </div>
                    </div>
                </li>

                <li><Link to="/TP7_EFSI_Bebczuk_Susel/Contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;