import { useState, useEffect } from "react";
import ListaProductos from "../components/ListaProductos";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(){
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        async function fetch(){
            await axios.get("https://dummyjson.com/products")
            .then(resp => setProductos(resp.data.products.filter(_ => Math.random() >= 0.5).slice(0, 5)))
        }

        fetch();
    }, []);
    
    return (<>
        <div className="home-cards">
            <Link className="home-card" to="/TP7_EFSI_Bebczuk_Susel/Productos"><img src="/TP7_EFSI_Bebczuk_Susel/catalogo.png"/></Link>
            <Link className="home-card" to="/TP7_EFSI_Bebczuk_Susel/QuienesSomos"><img src="/TP7_EFSI_Bebczuk_Susel/quienessomos.png"/></Link>
            <Link className="home-card" to="/TP7_EFSI_Bebczuk_Susel/Contacto"><img src="/TP7_EFSI_Bebczuk_Susel/contacto.png"/></Link>
        </div>

        <h2>Nuestros productos:</h2>
        <ListaProductos productos={productos}/>
    </>);
}