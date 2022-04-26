import React from "react"
import "./navbar.css"
import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <div className="navbar">
            <div className="logo">
                <span className="customLogo">chos-restaurant</span>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/" className="text_link">Home</NavLink></li>
                <li><NavLink to="/about" className="text_link">About</NavLink></li>
                <li><NavLink to="/products" className="text_link">Products</NavLink></li>
                <li><NavLink to="/contact" className="text_link" activeClassName="active">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar