import React from "react";
import "./InstructionDisplay.css"; 

function InstructionDisplay(props){
    return(
       <div classNmae="instruction-display">
        <p>{props.text}</p>
       </div>
    ); 
}

export default InstructionDisplay