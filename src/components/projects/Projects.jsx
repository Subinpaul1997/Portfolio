import React from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects(){
    return (
        <div className="projectContainer" id="Projects">
            <div className="titleContainer1">
            <h1 className="title1">Projects</h1>
            </div>

            <div className="projectDetailContainer">
                <ProjectCard image="\asset\zocialapp.png" projectName="Social App UI"
                about="A UI designed for social media application using ReactJS" url="https://github.com/Subinpaul1997/Social-App.git"/>

                <ProjectCard image="\asset\Untitled.png" projectName="Metro App"
                about="A fare calculator App for Metro rail build using ReactJS" url="https://github.com/Subinpaul1997/Metro-App/tree/master"/>
            </div>
           

        </div>
    )
}