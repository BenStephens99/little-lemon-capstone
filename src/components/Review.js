import React from "react";

function Review (props) {
    return (
        <div className="review">
            <h2>{props.name}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default Review;