import React from "react";
import "./IngredientDisplay.css"; 

function IngredientDisplay(props){
    return(
        <div className="ingredient-display">
            <p>{props.ingName}{"  "} {props.quantity}{"x"}{"  "} {props.measure}</p>
        </div>
    );
}

export default IngredientDisplay