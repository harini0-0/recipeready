import React, { useState } from "react";
import "./IngOrder.css"; 
import Form from "react-bootstrap/Form"

function IngOrder(props){

    const [quantity, setQuantity] = useState(props.quantity); 
    const [measure, setMeasure] = useState(props.measure); 

    return(
        <div className="ingorder">
            <Form>
                <Form.Label className="ingorder-name">{props.ingName}</Form.Label>
                <Form.Control value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder={props.quantity} type="number"></Form.Control>
                <Form.Control value={measure} onChange={(e) => setMeasure(e.target.value)} placeholder={props.measure} type="number"></Form.Control>
            </Form>
        </div>
    ); 
}

export default IngOrder