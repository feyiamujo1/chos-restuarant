import React from "react"
import { Link } from "react-router-dom"
import "./contact.css"

function Contact() {
    return(
        <div className="contact-wrapper">
            <div className="contact">
                <h3>Visit us at:</h3>
                <p>No.1, Somewhere Street, Chinatown</p>
            </div>
            <div className="contact">
                <h3>Leave us a message</h3>
                <input placeholder="Enter your name"></input>
                <input placeholder="Enter your email"></input>
                <textarea placeholder="Enter your message" rows="6"></textarea>
                <button><Link to="/">Send Message</Link></button>
            </div>
        </div>
    )
}

export default Contact