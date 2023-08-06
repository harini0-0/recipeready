import { db } from "../firebase"
import {
    addDoc,
    collection,
} from "firebase/firestore";

const recipeCollectionRef = collection(db, "recipe"); 


class RecipeDataService {
    addRecipe = (newRecipe) => {
        return addDoc(recipeCollectionRef, newRecipe)  
    }

  }

export default new RecipeDataService();