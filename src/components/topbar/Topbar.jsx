import React from "react";
import { Link } from "react-scroll";
import "./topbar.css"

export default function Topbar (){
    return(
        <div className="topbarContainer" id="home">
            <div className="items">
             <Link  to="home">Home</Link>
             <Link  to="skill" >Skills</Link>
             <Link  to="Projects" >Projects</Link>
             <Link  to="footer">Contact</Link>
            </div>
        </div>
    )
}  