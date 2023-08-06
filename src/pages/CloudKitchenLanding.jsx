
import "./CloudKitchenLanding.css"; 
import Recipe from "../components/Recipe";
import IncomingOrders from "../components/IncomingOrders";
import { Link } from "react-router-dom";

function CloudKitchenLanding(){

    return(
        <div className="cloud-kitchen-landing">
            <div className="container1">
                <h1 className="ckl-h1"> Welcome to your dashboard!</h1>
                
            </div>
            <div className="container2">
                <div className="right-container">
                    <div className="lc-child">
                        <div className="lc-child-2"></div>
                        <h2 className="rc-h2">YOUR RECIPES</h2>
                        <div className="font-ckl">
                            <Link to="/recipeinput">
                                <h4 className="ckl-h4">Add new recipe!</h4>
                            </Link>
                        </div>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                    </div>
                </div>
                <div className="left-container">
                    <div className="rc-child">
                        <h2 className="rc-h2">INCOMING ORDERS SECTION</h2>
                        <IncomingOrders/>
                        <IncomingOrders/>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default CloudKitchenLanding