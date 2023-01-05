import React from "react";

const Main = () => {
    return (
        <>
            <div className="main">
                <div className="main_sec1">
                    <h2>Premium</h2>
                    <p>Quality</p>
                    <h1>Restraunt & Dishes</h1>
                </div>
                <div className="main_sec2" >
                    <div className="Image">
                        <div>
                            <img src="https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&w=600" />
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </div>
                    </div>
                    <div className="main_img_name">
                        <p>Sweet</p>
                        <p>Healthy</p>
                        <p>Classic</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;