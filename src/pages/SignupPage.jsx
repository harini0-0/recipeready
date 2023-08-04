import React from "react";
import Button from 'react-bootstrap/Button';

function SignupPage(){
    
    const handleClick = () => {
        //we trigger firebase auth whatever
    }
    
    return (
        <div className="signup-page">
            <><h1 style={{ textAlign: 'center' }}>RecipeReady</h1><h2 style={{ textAlign: 'center' }}>Sign Up</h2></>
            <form>
                <input type="text" placeholder="UserName" />
                <input type="text" placeholder="Phone Number" />
                <label for="usertype">Select User Type:</label>
                <select id="usertype" name="usertype">
                    <option value="customer">Customer</option>
                    <option value="seller">Seller (Cloud Kitchen)</option>
                    <option value="delivery_executive">Delivery Executive</option>
                </select>
                <Button onClick={handleClick}>Submit</Button>
            </form>
        </div>
    ); 
}

export default SignupPage
