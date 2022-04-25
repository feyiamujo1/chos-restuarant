import React from "react"
import "./home.css"
import "../NavBar/navbar.css"

function Home() {
    return(
        <div className="wrapper">
            <div className="content">
                <div className="welcome">
                    <h1>Welcome</h1>
                    <span className="customLogo home-logo"> chos-restaurant</span>  
                    <p><em>Reimagining Chinese Cuisine</em></p>
                    <div className="home-buttons">
                        <button>View Menu</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home