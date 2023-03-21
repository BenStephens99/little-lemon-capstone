import React from "react";
import salad from '../images/Greek-Salad.webp'
import Special from "./Special";
import bruger from '../images/burger.jpg'
import cakes from '../images/dessert.jpg'
import salad2 from '../images/salad.webp'
import food from '../images/food.avif'
import Review from "./Review";

function Main(props) {
    return (
        <main>
            <div className="banner">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicargo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <button onClick={props.toggleForm}>Make a booking</button>
                </div>
                <div className="banner-image">
                    <img src={salad} alt="salad" />
                </div>
            </div>

            <div className="specials">
                <Special title="Greek Salad"
                    image={salad2}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua."/>

                <Special title="Burger"
                    image={bruger}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua."/>

                <Special title="Cakes"
                    image={cakes}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua."/>

                <Special title="Food"
                    image={food}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua."/>
            </div>

            <h1>Reviews</h1>

            <div className="reviews">
                <Review name="John Doe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua." />

                <Review name="John Doe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua." />

                <Review name="John Doe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua." />

                <Review name="John Doe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua." />

                <Review name="John Doe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua." />

                <Review name="John Doe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua." />

                <Review name="John Doe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua." />

                <Review name="John Doe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua." />

                <Review name="John Doe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua." />
            </div>
        </main>
    )
}

export default Main;