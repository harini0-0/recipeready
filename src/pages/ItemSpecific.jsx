import React from "react";
import "./ItemSpecific.css"; 
import {BiSolidTimeFive} from "react-icons/bi"; 
import {GiMuscleFat} from "react-icons/gi"; 
import {BsBook} from "react-icons/bs"; 
import {AiFillFire} from "react-icons/ai"; 
import {GiSugarCane} from "react-icons/gi"; 
import {BiDna} from "react-icons/bi"; 
import IngredientDisplay from "../components/IngredientDisplay";
import InstructionDisplay from "../components/InstructionDisplay";
import { recipeDummy } from "../menuData";
import {GiPotato} from "react-icons/gi"; 

function ItemSpecificPage(){
    const index = window.location.search; 
    const params = new URLSearchParams(index); 
    // const IdFromURL = params.get('id'); 
    return(
        <div className="item-specific">
        <div className='flex' style={{float:"right", margin:"20px"}}>
                    <div className="login">
                        <button onClick={()=>{window.location.href=`/customization`}} className='bg-black text-white px-10 py-1 ml-2 h-10 w-[100px] rounded-md'>Checkout</button>
                    </div>
            </div>
            <div className="first-container">
            
                <h1 className="cont-h1">RECIPE FOR {recipeDummy[0].name}</h1>  

            </div>
            <div className="second-container">
                <div className="item-time">
                    <BiSolidTimeFive/>
                    <p>{recipeDummy[0].prepTime}</p>
                </div>
                <div className="item-time">
                    <GiMuscleFat/>
                    <p>{recipeDummy[0].difficulty}</p>
                </div>
                <div className="item-time">
                    <BsBook/>
                    <p>{recipeDummy[0].ingredients.length} Ingredients</p>
                </div>
                <div className="item-time">
                    <AiFillFire/>
                    <p>{recipeDummy[0].nutrition.calories}</p>
                </div>
                <div className="item-time">
                    <GiSugarCane/>
                    <p>{recipeDummy[0].nutrition.carbohydrates}</p>
                </div>
                <div className="item-time">
                    <BiDna/>
                    <p>{recipeDummy[0].nutrition.proteins}</p>
                </div>
                <div className="item-time">
                    <GiPotato/>
                    <p>{recipeDummy[0].nutrition.fat}</p>
                </div>
            </div>
            <div className="third-container">
                <div className="ingredients-side">
                    <h2>INGREDIENTS</h2>
                    <div className="ingredient-list">

                        {recipeDummy[0].ingredients.map((ingredient, index) => (
                           <IngredientDisplay key={index} index={index} ingName={ingredient.ingredientName} quantity={ingredient.quantity} measure = {ingredient.measure}/>
                             
                        ))}
                    </div>
                </div>
                <div className="instructions-side" >
                    <h2>INSTRUCTIONS</h2>
                    <div className="instruction-list" style={{color: "black"}}>
                        {recipeDummy[0].instructions.map((instruction, index) => (
                            <InstructionDisplay key={index} index={index} text={instruction}/>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    ); 
}

export default ItemSpecificPage