import { NavLink } from "react-router-dom/cjs/react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <NavLink to="/preferences">Sensory Preferences Survey</NavLink>
            <NavLink to="/sample">Student Sample Survey</NavLink>
            <NavLink exact to="/">Home</NavLink>
        </div>
    )
}

export default NavBar