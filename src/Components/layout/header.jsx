import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
    return (
        <ul>
            <li><Link class="active" to="#home" className="active">Home</Link></li>
            <li><Link to="/users" className="active">User</Link></li>
            <li><Link to="/products" className="active">Product</Link></li>
            <li><Link to="/login" className="active">Login</Link></li>
            <li><Link to="/register" className="active">Register</Link></li>
        </ul>

    );
}

export default Header;