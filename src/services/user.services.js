import { db } from "../firebase"
import {
  collection,
  addDoc,
} from "firebase/firestore";
const userCollectionRef = collection(db, "users");

class UserDataService {
    addUser = (newUser) => {
      return addDoc(userCollectionRef, newUser);
    };
  }

export default new UserDataService();

