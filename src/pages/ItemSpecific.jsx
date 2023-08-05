import React from "react";
import "./ItemSpecific.css"; 
import {BiSolidTimeFive} from "react-icons/bi"; 
import {GiMuscleFat} from "react-icons/gi"; 
import {BsBook} from "react-icons/bs"; 
import IngredientDisplay from "../components/IngredientDisplay";
import InstructionDisplay from "../components/InstructionDisplay";

function ItemSpecificPage(){
    return(
        <div className="item-specific">
            <div className="first-container">
                <h1 className="cont-h1">RECIPE FOR CHEESECAKE</h1>
            </div>
            <div className="second-container">
                <div className="item-time">
                    <BiSolidTimeFive/>
                    <p>25 minutes</p>
                </div>
                <div className="item-time">
                    <GiMuscleFat/>
                    <p>Difficult</p>
                </div>
                <div className="item-time">
                    <BsBook/>
                    <p>10 Ingredients</p>
                </div>
            </div>
            <div className="third-container">
                <div className="ingredients-side">
                    <h2>INGREDIENTS</h2>
                    <div className="ingredient-list">
                        <IngredientDisplay ingName={"Tomato"} quantity={5} measure = {"Cups"}/>
                        <IngredientDisplay ingName={"Cheese"} quantity={3} measure = {"Tbsp"}/>
                        <IngredientDisplay ingName={"Blue Berry"} quantity={3} measure = {"tbsp"}/>
                        <IngredientDisplay ingName={"Tomato"} quantity={5} measure = {"Cups"}/>
                        <IngredientDisplay ingName={"Cheese"} quantity={3} measure = {"Tbsp"}/>
                        <IngredientDisplay ingName={"Blue Berry"} quantity={3} measure = {"tbsp"}/>
                        <IngredientDisplay ingName={"Tomato"} quantity={5} measure = {"Cups"}/>
                        <IngredientDisplay ingName={"Cheese"} quantity={3} measure = {"Tbsp"}/>
                        <IngredientDisplay ingName={"Blue Berry"} quantity={3} measure = {"tbsp"}/>
                    </div>
                </div>
                <div className="instructions-side">
                    <h2>INSTRUCTIONS</h2>
                    <div className="instruction-list">
                        <InstructionDisplay text={"molestias eum fa Temporib non recusandae. Itaque earum rerum hic tenetur ae"} />
                        <InstructionDisplay text={"steps ksbcwe wkjebckhew kejbjwe"} />
                        <InstructionDisplay text={" sint occaecati cupidi qui offum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur ae"} />
                        <InstructionDisplay text={"s sint occlique sunt in culpa qquidem placeat facere possimus, omnis pellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur aejwe"} />
                        <InstructionDisplay text={"steps ksbcwe wkjebckhew kejbjwe"} />
                        <InstructionDisplay text={"s sint occlique sunt in culpa qquidem placeat facere possimus, omnis pellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur aejwe"} />
                        <InstructionDisplay text={"steps ksbcwe wkjebckhew kejbjwe"} />
                        <InstructionDisplay text={"steps ksbcwe wkjebckhew kejbjwe"} />
                    </div>
                </div>
            </div>
            
        </div>
    ); 
}

export default ItemSpecificPage