import React from "react";
import "./contactCard.css"


export default function Contactcard (props){
    return(
        <div className="ccardContainer">
            <div className="mode">
              <span className="modelogo">{props.Clogo}</span>
              <span className="modeName">{props.Cname}</span>
              <br></br>
    
              <div className="detail">
              <span className="contactInfo">{props.Cdetail}</span>
              </div>            
            </div>
        </div>
    )
}