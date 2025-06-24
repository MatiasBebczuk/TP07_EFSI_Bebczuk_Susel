import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductoDetalle.css";

export default function ProductoDetalle(){
    let { IdProducto } = useParams();
    const [producto, setProducto] = useState([]);
    useEffect(() => {
        async function fetch(){
            await axios.get(`https://dummyjson.com/products/${IdProducto}`)
            .then(resp => setProducto(resp.data))
        }

        fetch();
    }, []);
    
    return (<div className="productodetalle">
        <img src={(producto.images || [""])[0]}/>
        <div>
            <div style={{display: "flex", gap: 10}}>
                <h1>{producto.title}</h1>
                <h2>${producto.price}</h2>
            </div>
            <p>{producto.description}</p>
        </div>
    </div>);
}