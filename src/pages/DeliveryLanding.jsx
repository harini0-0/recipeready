import React from "react";
import { useNavigate } from 'react-router-dom';
import './Custom.css';
function DeliveryLanding(){
    const navigate = useNavigate();
    return(
        <div>
                <h1>Recipe Ready</h1>
                <h2>Delivery app</h2>

            <button onClick={() => navigate("/Livetask")}> Pending Tasks </button>
            <button onClick={() => {navigate("/Neworder");}}> New Orders </button>
        </div>
    ); 
}

export default DeliveryLanding