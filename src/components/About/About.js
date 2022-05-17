import React from "react"
import "./about.css"
import Dessert from "../../images/desserts.jpg"
import Food from "../../images/food.jpg"
import Snack from "../../images/snack.jpg"
import { Link } from "react-router-dom"

function About() {
    const courses = [
        {id: 1, foodname: "Snacks", image: Snack},
        {id: 2, foodname: "Desserts", image: Dessert},
        {id: 3, foodname: "Cuisines", image: Food}      
    ]
    return(
        <div className="about_page">
            <section id="header">
                <div class="container bg-image">
                    <div class="info">
                    <h1>About Us</h1>
                    <p>We are a seasonal restaurant with freshly-baked snacks, sweet desserts and delicous food/delicacies. We are located in Nigeria and the business is run
                        by SH-Group-76 interns. We are longtime champions of mouthwatering cooking and have renowned chefs including those from Africa, Europe and China.
                        At this restaurant, We continue to offer dedicated services as well as affordable food menus to our customers.         </p>
                    </div>
                </div>
            </section>
            <div class="heading">
                <h2>What We Offer </h2>
            </div>
            <section className="services">
            {
                courses && courses.map((course) =>
                <div className="card">
                    <div className="content">
                        <h2>0{course.id}</h2>
                        <div>
                            <h3>{course.foodname}</h3>
                            <img className="products" src={course.image} alt={course.foodname}/>
                            <Link className="read_more_link" to="/product">Goto Menu</Link>
                        </div>
                    </div>
                </div>
            )}
            </section>
        </div>


    )
}

export default About