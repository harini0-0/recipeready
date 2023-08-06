import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginPage.css'; 
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth } from "../firebase"; 
import UserDataService from "../services/user.services";

function LoginPage(){
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const login = () => {
        signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            const user = userCredential.user;

            const documentName = user.uid; 
            try {
                const userData = await UserDataService.fetchUserData(documentName);
                const customerType = userData.data().type;
                const customerRegion = userData.data().region; 

                if(customerType === 0){
                    window.location.href=`/customerlanding?id=${documentName}&region=${customerRegion}`; 
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
        <div className="login-page">
            <div className="login-container">
                <Form>
                    <h1>RecipeReady</h1>
                    <h2>Login!</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter your Email ID:</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email id" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label>Enter password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" />
                    </Form.Group>

                    <Button onClick = {login} variant="outline-light">Submit</Button>
                </Form>
            </div>
        </div>
    ); 
}


export default LoginPage