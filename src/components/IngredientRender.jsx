import React from "react";
import "./IngredientRender.css"; 

function IngredientRender(props){
    return(
        <>  
            <div className="ingredient-list-container">
                <div>{props.index + 1}. {props.ingredientName} - {props.quantity} {props.measure}</div>
            </div>

        </>
    ); 
}

export default IngredientRender
