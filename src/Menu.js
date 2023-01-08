import React from "react";
import Data from "./MenuData";

const Menu = () => {
    return (
        <div>
            <div className="wrapper">
                {Data.map((items) => (
                    <div className="menu">
                        <div className="menu_main">
                            <div className="menu_img">
                                <img src={items.imgsrc} />
                            </div>
                            <div className=" menu_deteil" >
                                <div className="menu_name">
                                    <p>{items.name}</p>
                                </div>
                                <div className="deteil">
                                    <div className="menu_price">
                                        <p> price: {items.price}</p>
                                    </div>
                                    <div className="menu_order">
                                        <p>Orders till now:{items.order}</p>
                                    </div>
                                    <div className="time">
                                        <p>Home Delivery Time:{items.time}</p>
                                    </div>

                                    <div className="quality">
                                        <p>Quality:{items.quality}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
};

export default Menu;