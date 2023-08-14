
import {Link } from "react-router-dom";

const Header = () =>{
    return (
        <div>
            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
            <label htmlFor="menu-icon"></label>
            <nav className="nav">
                <ul>
                    <li> <Link to="/">HOME</Link> </li>
                    <li> <Link to="/about">ABOUT</Link> </li>
                    <li> <Link to="/blogs">BLOGS</Link> </li>
                    <li> <Link to="/projects">PROJECTS</Link> </li>
                    <li> <Link to="/contact">CONTACT</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;