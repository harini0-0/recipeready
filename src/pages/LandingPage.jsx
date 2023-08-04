import React from "react";
import {Link} from "react-router-dom"; 
import Button from 'react-bootstrap/Button';

function LandingPage(){
    return(
        <div>
            <Link to ={ "/login"}>
                <Button>Login</Button>
            </Link>
            <Link to={"/signup"}>
                <Button >Sign Up</Button>
            </Link>
        </div>
    ); 
}

export default LandingPage