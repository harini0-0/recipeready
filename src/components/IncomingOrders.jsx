import React from "react";
import "./IncomingOrders.css"; 
import {AiFillFire} from "react-icons/ai"; 
import {BiSolidTimeFive} from "react-icons/bi"; 
import {GiMuscleUp} from "react-icons/gi";  

function IncomingOrders(){
    return(
        <>
            <div className="incoming-orders">
                <div className="io-child">
                    <h1 className="io-h1">Name</h1>
                </div>
                <div className="io-bottom">
                    <p>Calories <AiFillFire/></p>
                    <p>Time <BiSolidTimeFive/></p>
                    <p>Difficulty <GiMuscleUp/></p>
                </div>
            </div>
        </>
    ); 
}

export default IncomingOrders