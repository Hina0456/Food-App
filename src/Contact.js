import React from "react";

const Contact = () => {
    return (
        <div className="inputs">
            <h1>Contact</h1>
            <from>
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Number" />
                <input type="text" placeholder="Order" />
                <input type="Email" placeholder="Email" />
                <input type="text" placeholder="Massege " />
                <br />
                <button>Send</button>
            </from>
        </div>
    )
};

export default Contact;