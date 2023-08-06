import React from "react";
import "./Customization.css"; 
import Button from "react-bootstrap/Button"; 
import IngOrder from "../components/IngOrder";

function Customization(){
    return(
        <div className="customization">
            <div className="cust-parent">
                <div className="cust-lc">
                    
                    <div className="cust-main">
                        <h1 className="cust-h1">Customize your order here!</h1>
                        <h2 className="cust-h2">Your customization of ItemName: </h2>
                        <IngOrder ingName={"Tomato"} quantity={5} measure={"Cups"}/>
                        <IngOrder ingName={"Flour"} quantity={5} measure={"Tbsp"}/>
                        <IngOrder ingName={"Potato"} quantity={5} measure={"Kg"}/>
                        <IngOrder ingName={"Potato"} quantity={5} measure={"Kg"}/>
                        <IngOrder ingName={"Potato"} quantity={5} measure={"Kg"}/>
                        <IngOrder ingName={"Potato"} quantity={5} measure={"Kg"}/>
                    </div>
                </div>
                <div className="cust-rc">
                    <div className="cc-temp">
                    <h1 className="cc-h1">Order summary</h1>
                    <div className="cc-child1">
                        <p>Items total</p>
                        <p>300RS</p>
                    </div>
                    <div className="cc-child1">
                        <p>Tax Charged</p>
                        <p>180RS</p>
                    </div>
                    <div className="cc-buttons">
                        <Button size="lg" variant="danger">Confirm Payment</Button>{' '}
                    </div>
                    </div>

                </div>
            </div>
        </div>
    ); 
}

export default Customization