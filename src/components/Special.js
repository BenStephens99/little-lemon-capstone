import React from "react";

function Special(props) {
    return (
        <div className="special">
            <div className="img-holder">
                <img src={props.image} />
            </div>
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <button>Take a look</button>
            </div>

        </div>
    )
}
export default Special;