import { Link } from "react-router-dom";
import "./Producto.css";

export default function Producto(producto){
    producto =  producto.producto;

    return (<div className="card">
    <Link to={"/TP7_EFSI_Bebczuk_Susel/ProductoDetalle/" + producto.id}><img src={producto.thumbnail || ""} className="card-img-top"/></Link>
    <div className="card-body">
      <Link to={"/TP7_EFSI_Bebczuk_Susel/ProductoDetalle/" + producto.id}><h5 className="card-title">{producto.title}</h5></Link>
      <p className="card-text">${producto.price}</p>
    </div>
  </div>);
}