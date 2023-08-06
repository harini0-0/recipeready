import React from "react";
import "./Recipe.css"; 
import {AiFillFire} from "react-icons/ai"; 
import {BiSolidTimeFive} from "react-icons/bi"; 
import {GiMuscleUp} from "react-icons/gi"; 
import {BsFillTrashFill} from "react-icons/bs"; 

function Recipe(props){
    return(
        <>
            <div className="recipe">
                <div className="upper-child">
                    <h1 className="recipe-h1">Name</h1>
                    <p><BsFillTrashFill size={24}/></p>
                </div>
                <div className="recipe-bottom">
                    <p>Calories <AiFillFire/></p>
                    <p>Time <BiSolidTimeFive/></p>
                    <p>Difficulty <GiMuscleUp/></p>
                </div>
            </div>
        </>
    ); 
}

export default Recipe; 