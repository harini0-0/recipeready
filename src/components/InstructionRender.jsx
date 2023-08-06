import React from "react";
import "./InstructionRender.css"; 

function InstructionRender(props){
    return(
        <>
            <div className="instruction-list-container">
                {props.index+1}. {props.instruction}
            </div>
        </>
    ); 
}

export default InstructionRender; 