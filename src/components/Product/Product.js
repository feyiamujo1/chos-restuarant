import React from "react"
import "./product.css"
import CrispPrawn from "../../images/crispy-honey-king-prawn.jpg"
import FishPepperSoup from "../../images/fish_pepper_soup.jpg"
import FishTaco from "../../images/fish-taco.jpg"
import JackDanielRibs from "../../images/jd.jpg"
import Grilledhicken from "../../images/grilled-chicken.jpg"
import ShaghettiRimini from "../../images/spag.jpg"
import SpicyChicken from "../../images/spicychicken.jpg"
import TriffleBurger from "../../images/triffle-burger.jpg"
import TriffleFries from "../../images/triffle-fries.jpg"
import Pizza from "../../images/pizza.jpg"
import FriedRice from "../../images/fried-rice.jpg"
import JollofRice from "../../images/Jollof-rice.jpg"

function Product() {

    const foods = [
        {id: 1, foodname: "Truffle Burger", image: TriffleBurger, 
            description: "Mozzarella, caramelized onions, sautéed mushrooms, rocket, crispy onions & truffle aioli",
            price: "9,500"
        },
        {id: 2, foodname: "Truffle Fries", image: TriffleFries, 
            description: "Thick cut double fried French fries served with truffle mayo & covered in parmesan",
            price: "5,000"
        },
        {id: 3, foodname: "Spicy Chicken", image: SpicyChicken, 
            description: "Chicken wings in a sweet & spicy glaze topped with spring onion & sesame seed",
            price: "4,500"
        },
        {id: 4, foodname: "Spaghetti Rimini", image: ShaghettiRimini, 
            description: "Spaghetti with prawns, tomato, garlic, chili flakes, basil & olive oil",
            price: "12,500"
        },
        {id: 5, foodname: "Hot Honey Prawns", image: CrispPrawn, 
            description: "Perfectly grilled chicken served with your choice of sauce & a side",
            price: "7,000"
        },
        {id: 6, foodname: "Jack Daniels Steak", image: JackDanielRibs, 
            description: "Steak served with our Jack Daniels infused BBQ sauce, with a tomato base, bacon bits & mushrooms",
            price: "24,500"
        },
        {id: 7, foodname: "Fish Tacos", image: FishTaco, 
            description: "Beer battered fish, avocado, salsa, jalapeno, tabasco, pickled onion & tequila lime mayo",
            price: "5,000"
        },
        {id: 8, foodname: "Fish Pepper Soup", image: FishPepperSoup, 
            description: "Seared croaker served in an herby spicy tomato sauce with red & green peppers",
            price: "2,500"
        },
        {id: 9, foodname: "Pepperoni Pizza", image: Pizza, 
            description: "Pizza with lots of pepperoni and extra cheese",
            price: "3,500"
        },
        {id: 10, foodname: "Grilled Chicken", image: Grilledhicken, 
            description: "Perfectly grilled chicken served with your choice of sauce & a side",
            price: "7,500"
        },
        {id: 11, foodname: "Fried Rice", image: FriedRice, 
            description: "Steaming hot fried rice with alots of peas, veggies & chicken",
            price: "2,500"
        },
        {id: 12, foodname: "Jollof Rice", image: JollofRice, 
            description: "Steaming hot Jollof rice with alots of peas, veggies & chicken",
            price: "2,500"
        }
    ]

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
                        <div className="line-deco"></div>
                </div>
                <div className="menu_container">
                    {
                        foods && foods.map((food) =>
                        <div className="food_deplay">
                            <div className="food_image_container">
                                <img src={food.image} alt={food.foodname}/>
                            </div>
                            <div className="food_detail_container">
                                <h2 className="food_name">{food.foodname}</h2>
                                <p className="food_detail">{food.description}</p>
                                <p className="food_price">&#8358;{food.price}</p>
                            </div>
                        </div>  
                        )}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Product