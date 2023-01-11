import React from "react";
import "./skills.css"
import Card from "./Card";
import {FaReact,FaNodeJs} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {DiJavascript} from 'react-icons/di';

export default function Skills (){
    return(
        <div className="skillContainer" id="skill">
            <div className="headContainer">
             <h1 className="heading">Skills</h1>   
            </div>
            <div className="skillSet">  
            <Card logo={<DiJavascript className="icon"/>} name="JavaScript" />
            <Card logo={<FaReact className="icon"/>} name="ReactJS"/>
            <Card logo={<BsGithub className="icon"/>} name="Git"/>
            <Card logo={<FaNodeJs className="icon"/>} name="NodeJS"/>
            </div>    
        </div>
    )
}