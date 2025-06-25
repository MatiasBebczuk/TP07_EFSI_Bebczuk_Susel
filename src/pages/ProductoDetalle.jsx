import { useState, useEffect, Fragment } from "react";
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
        {producto.images && producto.images.length != 0 && <img src={producto.images[0]}/>}
        <div>
            <h1>{producto.title}</h1>
            <h2>${producto.price}</h2>
            <p>{producto.description}</p>
            {producto.reviews && <div className="reviews">
                <h2>Opiniones</h2>
                {
                    producto.reviews.map((review, i) => <div className="review" key={i}>
                        <h3>{review.reviewerName} | {review.rating}/5</h3>
                        <p>{review.comment}</p>
                    </div>)
                }
            </div>}

            <div className="botonescompra">
                <button>Comprar</button>
                <button>Añadir al carrito</button>
            </div>
        </div>
    </div>);
}