import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import mylogo from "../../images/logo.png"

function NavBar(){
    return(
        <div className="navbar">
            <div className="logo">
                <img src= {mylogo} alt="logo"/>
            </div>
            <ul className="nav-links">
                <li><Link to="/" className="text_link">Home</Link></li>
                <li><Link to="/about" className="text_link">About</Link></li>
                <li><Link to="/product" className="text_link">Products</Link></li>
                <li><Link to="/contact" className="text_link">Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavBar