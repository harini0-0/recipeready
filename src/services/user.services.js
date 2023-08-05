import { db } from "../firebase"
import {
  doc,
  setDoc,
  getDoc
} from "firebase/firestore";

class UserDataService {

    addUser = (documentName, newUser) => {
      return setDoc(doc(db, "users", documentName), newUser);
    };

    fetchUserData = (documentName) => {
      return getDoc(doc(db, "users", documentName)); 
    }
  }

export default new UserDataService();

