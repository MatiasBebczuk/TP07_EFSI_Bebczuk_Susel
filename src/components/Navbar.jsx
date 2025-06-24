import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav>
            <ul>
            <li><Link to="/TP7_EFSI_Bebczuk_Susel/">Home</Link></li>
            <li><Link to="/TP7_EFSI_Bebczuk_Susel/QuienesSomos">Quiénes somos</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;