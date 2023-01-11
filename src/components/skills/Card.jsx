import React from "react";
import "./card.css";
  

export default function Card (props){
    return (
      <div className="cardContainer">  
        <div className="card">
            <div className="logoName">
                <h3 className="logo">{props.logo}</h3>
            </div> 
            <div className="skillName">
                <h3 className="skill">{props.name}</h3>
            </div>
        </div>
      </div>  
    )
}