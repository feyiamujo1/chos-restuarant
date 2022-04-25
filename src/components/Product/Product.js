import React from "react"
import "./product.css"

function Product() {
    return(
        <div>
            <div className="products_display">
                
            </div>
            <div className="intro_content">
                    <p className="intro_text_small">HAND-CRAFTED BY OUR CHEFS</p>
                    <h1 className="intro_text_big">All in good taste!</h1>
                </div>
            <div>
            <div className="main_menu_container">
                <div className="menu_intro">
                    <h1>Our Menu</h1>
                    <p>Our restaurant features lavish buffets combining Continental, African, Indian, Arabic and Far 
                        Eastern flavors with action stations, live cooking, theme nights, Sunday brunch and 
                        healthy corners. Ideal for families, friends or even a business lunch.</p>
                        <hr/>
                </div>
                <div className="menu_container">
                    <div className="food_deplay">
                        <div className="food_image_container">
                            <img src="" alt=""/>
                        </div>
                        <div className="food_detail_container">
                            <h2 className="food_name">Food Name here</h2>
                            <p className="food_detail">Far far away, behind the word mountains, far from the countries Vokalia..</p>
                            <p className="food_price">&#8358;2000</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Product