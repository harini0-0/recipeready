import React from "react";
import { useState } from "react";
import "./SignupPage.css"; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"; 
import UserDataService from "../services/user.services";

function SignupPage(){  
    
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [region, setRegion] = useState(""); 
    const [customerType, setCustomerType] = useState(0); 


    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            const documentName = user.uid; 
            //create the new user here:
            const newUser = {
                availability : 1, 
                recipeID : "", 
                region : region, 
                type: customerType, 
                userName: email,
                loginTime: user.metadata.lastSignInTime
            }

            //add our user to database
            try {
                await UserDataService.addUser(documentName, newUser); 
                //redirect on successful login 
                if(customerType === 0){
                    window.location.href="/customerlanding"; 
                }
                else if(customerType === 1){
                    window.location.href="/cloudkitchenlanding"; 
                }
                else if(customerType === 2){
                    window.location.href="/deliverylanding"; 
                }
            }catch (err) {
                console.log(err); 
            }
        }).catch((error) => {
            const errorCode = error.code;
            //const errorMessage = error.message;
            alert(errorCode);
        });
    }

    return (
        <div className="signup-page">
            <div className="signup-container">
                <Form>
                    <h1>RecipeReady</h1>
                    <h2>Sign Up!</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Your User Name:</Form.Label>
                        <Form.Control onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label>Enter password:</Form.Label>
                        <Form.Control onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Enter strong password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Customer Type</Form.Label>
                        <Form.Select onChange={(e) => {
                            if(e.target.value === "Customer"){
                                setCustomerType(0); 
                            }
                            else if(e.target.value === "Cloud Kitchen"){
                                setCustomerType(1); 
                            }
                            else{
                                setCustomerType(2); 
                            }
                            }}>
                            <option>Customer</option>
                            <option>Cloud Kitchen</option>
                            <option>Delivery</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Enter Your Region</Form.Label>
                        <Form.Control onChange={(e) => {setRegion(e.target.value)}} type="text" placeholder="Region" />
                    </Form.Group>


                    <Button onClick={signUp} variant="outline-light">Submit</Button>
                </Form>
            </div>
        </div>
    ); 
}

export default SignupPage
