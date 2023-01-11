import React from "react";
import Contactcard from "./Contactcard";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {BsTelephone} from 'react-icons/bs';
import "./footer.css"

export default function Footer (){
    return(
        <div className="contactContainer" id="footer">
            <div className="headContainer">
                <h1 className="headingStyle">Contact</h1>
            </div>
            <div className="typeofContacts">
                <Contactcard Clogo ={<AiOutlineMail/>} Cname="Mail" Cdetail= "subinpoll555@gmail.com"/>
                <Contactcard Clogo={<BsTelephone/>} Cname="Telephone Number" Cdetail="9746034327"/>
                <a href="https://github.com/Subinpaul1997" className="con">{<AiFillGithub/>}</a> 
                <a href="https://www.linkedin.com/in/subinpaul20/" className="con">{<AiFillLinkedin/>} </a>
                
            </div>

        </div>
    )
}