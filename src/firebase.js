import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJCuVEZY4UwmurPPd73zrsMDYV7Q8rd80",
  authDomain: "phone-auth-4afae.firebaseapp.com",
  projectId: "phone-auth-4afae",
  storageBucket: "phone-auth-4afae.appspot.com",
  messagingSenderId: "274861425568",
  appId: "1:274861425568:web:811c8ec2e46ff1f67a9ac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;