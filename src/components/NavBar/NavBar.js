import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div className="navbar">
            <div>
                <img src="" alt="logo"/>
            </div>
            <ul className="nav-links">
                <li><Link to="/" className="text_link">Home</Link></li>
                <li><Link to="/about" className="text_link">About</Link></li>
                <li><Link to="/products" className="text_link">Products</Link></li>
                <li><Link to="/contact" className="text_link">Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavBar