import React from "react";
import "./content.css"

export default function Content(){
    return(
        <div className="detailsContainer" >

         <div className="details">
            <p className="info">HI THERE! MY NAME IS SUBIN <br/> I'M A <strong> FRONT END DEVOLOPER.</strong> </p>
         </div>

         <div className="imageContainer">
            <img className="profileImage" src="\asset\IMG-0179.jpg" alt="" />
         </div>
        
        </div>
    )
}