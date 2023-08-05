import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./RecipeInput.css"; 
import IngredientRender from "./IngredientRender";
import InstructionRender from "./InstructionRender";
import RecipeDataService from "../services/recipe.services";
import { collection, addDoc, updateDoc, doc} from "firebase/firestore"; 
import { db } from "../firebase"
import { updateCurrentUser } from "firebase/auth";

function RecipeInput(props){

    //ingredients
    const [name, setName] = useState(""); 
    const [prepTime, setPrepTime] = useState(""); 
    const [calories, setCalories] = useState(); 
    const [carbohydrates, setCarbohydrates] = useState(); 
    const [proteins, setProteins] = useState(); 
    const [fats, setFats] = useState(); 
    const [difficulty, setDifficulty] = useState(""); 
    const [ingredient, setIngredient] = useState("");
    const [quantity, setQuantity] = useState("");
    const [measure, setMeasure] = useState("");
    const [ingList, setIngList] = useState([]); 
    const [recipeId, setRecipeId] = useState(""); 

    //instructions
    const [instruction, setInstruction] = useState(""); 
    const [instructions, setInstructions] = useState([]); 

    const updateUser = async (docRef) => {
        const userdocRef = doc(db, "users", props.uid); 

        console.log(userdocRef); 
        const user = await updateDoc(userdocRef, {
            recipeId : [...recipeId, docRef]
        });
    }

    const addRecipeToDatabase = async () => {

        const newRecipe = {
            cloudKitchenId : props.uid, 
            name : name,
            difficulty : difficulty, 
            prepTime: prepTime, 
            instructions: instructions, 
            nutrition : {
                calories : calories, 
                carbohydrates : carbohydrates, 
                proteins : proteins, 
                fats : fats
            }, 
            ingredients : ingList
        }

        const docRef = await addDoc(collection(db, "recipe"), newRecipe);
        updateUser(docRef.id); 
        console.log("Document written with ID: ", docRef.id);
        window.location.href="/cloudkitchenlanding"; 

       
    }

    const addItems = () => {

        const newList = {
            ingredientName : ingredient, 
            quantity : quantity, 
            measure : measure
        }

        setIngList([...ingList, newList]); 
        setIngredient(""); 
        setQuantity(""); 
        setMeasure("");
    }

    const addInstructions = () => {
        setInstructions([...instructions, instruction]); 
        setInstruction(""); 
    }

    return (
        <div className="recipeinput-container">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Name of the item</Form.Label>
                    <Form.Control value = {name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Item name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter Preperation Time:</Form.Label>
                    <Form.Control value={prepTime} onChange={(e) => setPrepTime(e.target.value)} type="number" placeholder="mins" />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Select Difficulty Level</Form.Label>
                    <Form.Select onChange={(e) => {
                        if(e.target.value === "Easy"){
                            setDifficulty("Easy"); 
                        }
                        else if(e.target.value==="Intermediate"){
                            setDifficulty("Intermediate")
                        }
                        else{
                            setDifficulty("Difficult")
                        }
                    }}>
                        <option value="" disabled>Select</option>
                        <option>Easy</option>
                        <option>Intermediate</option>
                        <option>Difficult</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter the following nutritional information</Form.Label>
                    <Form.Control value={calories} onChange ={(e) => setCalories(e.target.value)} type="text" placeholder="Calories(kcal)" />
                    <Form.Control value={carbohydrates} onChange ={(e) => setCarbohydrates(e.target.value)} type="text" placeholder="Carbohydrates(grams)" />
                    <Form.Control value ={proteins} onChange ={(e) => setProteins(e.target.value)} type="text" placeholder="Proteins(grams)" />
                    <Form.Control value = {fats} onChange ={(e) => setFats(e.target.value)} type="text" placeholder="Fats(grams)" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter Ingredients</Form.Label>
                    <Form.Control value={ingredient} onChange = {(e) => {setIngredient(e.target.value);}} type="text" placeholder="Ingredient Name" />
                    <Form.Control value={quantity} onChange = {(e) => {setQuantity(e.target.value);}} type="number" placeholder="Quantity" />
                    <Form.Control value={measure} onChange = {(e) => {setMeasure(e.target.value);}} type="text" placeholder="Cups/Grams/Tbsps/Tsps" />
                </Form.Group>
                {ingList.map((item, index) => (
                            <IngredientRender key={index} index={index} ingredientName = {item.ingredientName} quantity={item.quantity} measure = {item.measure}/>
                        ))}
                <Button onClick ={addItems} variant="outline-light">Add</Button>


                <Form.Group className="mb-3">
                    <Form.Label>Enter Instructions:</Form.Label>
                    <Form.Control value={instruction} onChange = {(e) => {setInstruction(e.target.value);}} type="text" placeholder="Type instructions here.." />
                </Form.Group>
                {instructions.map((instruction, index) => (
                        <InstructionRender key={index} index={index} instruction = {instruction}/>
                    ))}
                <Button onClick = {addInstructions} variant="outline-light">Add</Button>
                <Button onClick={addRecipeToDatabase} variant="outline-light">Add the recipe!</Button>
            </Form>
        </div>
    ); 
}

export default RecipeInput; 