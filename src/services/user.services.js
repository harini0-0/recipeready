// import { exitCode } from "process";
import { db } from "../firebase"
import {
  doc,
  setDoc,
  getDocs,
  collection,
  getDoc
} from "firebase/firestore";

class UserDataService {

    addUser = (documentName, newUser) => {
      return setDoc(doc(db, "users", documentName), newUser);
    };

    fetchUserData = (documentName) => {
      return getDoc(doc(db, "users", documentName)); 
    }
    // fetchAllRecipes = async (cloudUsers) => {
    //   const allRecipes = [];
    //   try {
    //     console.log(cloudUsers);
    //     const colRef = collection(db, "recipes");
    //     // const docsSnap = await getDocs(colRef);
    //     cloudUsers.forEach(element => {
    //       element.recipes.forEach(async (doc) => {
    //         const docu = await getDoc(doc(db, "recipes", doc));
    //         console.log(docu.data().name);
    //         allRecipes.push({
    //           recipeid: doc, 
    //           recipeName: docu.data().name, 
    //           recipeNutr: docu.data().nutrition, 
    //           recipePrepTime: docu.data().prepTime,
    //           recipeIngredients: docu.data().ingredients,
    //           recipeInstructions: docu.data().innstructions,
    //           recipeDiff: docu.data().difficulty,
    //         });
    //       });
    //     });
    //     return allRecipes;
    //   }
    //   catch (error) {
    //     console.log(error);
    //     return error;
    //   }
    // }
    // fetchAllCloudFromRegion = async (collectionName, Region) => {
    //   const cloudList = [];
    //   try {
    //     const colRef = collection(db, collectionName);
    //     const docsSnap = await getDocs(colRef);
    //     if(docsSnap.docs.length > 0) {
    //        docsSnap.forEach(doc => {
    //           if (Region === doc.data().region && doc.data().type === 1){
    //             // console.log(doc.id);
    //             cloudList.push({cloudid: doc.id, recipes: [doc.recipeId]});
    //           }
    //        })
    //     }
    //     return cloudList;
    // } catch (error) {
    //     console.log(error);
    //     return error;
    // }
      
    //   ;
    // }
  }

export default new UserDataService();

