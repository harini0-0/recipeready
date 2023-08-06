import { async } from "q";
import React from "react";
import UserDataService from "../services/user.services";
import Food from '../components/Food'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function CustomerLanding (props) {
    // const search = window.location.search; 
    // const params = new URLSearchParams(search); 
    // const IdFromURL = params.get('id'); 
    // const regionFromURL = params.get('region');
    // console.log("Hello worldddddd");
    // // console.log(IdFromURL);
    // // console.log(regionFromURL);
    // const userData = UserDataService.fetchAllCloudFromRegion("users", regionFromURL);
    // const recipeData = UserDataService.fetchAllRecipes(userData);

    // console.log("outside");
    return(
        <>
            <Navbar />
            <Hero />
            <Food />
        </>
    ); 
}

export default CustomerLanding