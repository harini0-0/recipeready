import React from "react";
import { useNavigate } from 'react-router-dom';
import './pages/Custom.css'; 
function Neworder() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Neworder</h1>
      <button onClick={() => navigate("/")}> Go Bck </button>
     
  
    </div>
  );
}

export default Neworder;
