import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginPage.css'; 

function LoginPage(){
    
    return (
        <div className="login-page">
            <div className="login-container">
                <Form>
                    <h1>RecipeReady</h1>
                    <h2>Login!</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="email" placeholder="Enter valid phone number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter OTP:</Form.Label>
                        <Form.Control type="email" placeholder="Enter OTP" />
                    </Form.Group>

                    <Button type = "submit" variant="outline-light">Submit</Button>
                </Form>
            </div>
        </div>
    ); 
}


export default LoginPage