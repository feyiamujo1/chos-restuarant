import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div className="navbar">
            <div>
                <img src="./images/logo.png" alt="logo"/>
            </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
        </div>
    )
}

export default NavBar