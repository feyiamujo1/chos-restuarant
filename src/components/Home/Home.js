import React from "react"
import "./home.css"
import "../NavBar/navbar.css"
import { Link } from "react-router-dom"

function Home() {
    return(
        <div className="wrapper">
            <div className="content">
                <div className="welcome">
                    {/* <h1>Welcome</h1> */}
                    <span className="customLogo home-logo"> chos-restaurant</span>  
                    <p><em>Reimagining our exquisite Cuisine</em></p>
                    <div className="home-buttons">
                        <button className="button"><Link to="/product">View Menu</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home