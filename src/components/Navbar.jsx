import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav>
            <ul>
            <li><Link to="/TP5_EFSI2-Bebczuk_Susel/">Home</Link></li>
            {/* <li><Link to="/TP5_EFSI2-Bebczuk_Susel/p1">Nuevas reservas</Link></li>
            <li><Link to="/TP5_EFSI2-Bebczuk_Susel/MisCitas">Mis citas</Link></li> */}
            </ul>
        </nav>
    );
}

export default Navbar;