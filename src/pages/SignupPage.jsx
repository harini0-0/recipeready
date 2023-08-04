import React from "react";
import "./SignupPage.css"; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupPage(){
    
    return (
        <div className="signup-page">
            <div className="signup-container">
                <Form>
                    <h1>RecipeReady</h1>
                    <h2>Sign Up!</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Your User Name:</Form.Label>
                        <Form.Control type="email" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Customer Type</Form.Label>
                        <Form.Select>
                            <option>Customer</option>
                            <option>Cloud Kitchen</option>
                            <option>Delivery</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="email" placeholder="Enter valid phone number" />
                    </Form.Group>

                    <Button type = "submit" variant="outline-light">Submit</Button>
                </Form>
            </div>
        </div>
    ); 
}

export default SignupPage
