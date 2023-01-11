import React from 'react'
import "./projectCard.css"


export default function ProjectCard(props) {
  return (
    <div className='projectCard'>
      <div className='projectImage'>
        <img className='projectPic' src={props.image} alt=""/>
      </div>
      <div className='projectDetails'>
        <p className='projectName'>{props.projectName}</p>
        <p className='projectAbout'>{props.about}</p>
        <button className='siteButton'>
          <a className='liveSite' href={props.url}>View Live Project </a>
        </button>
          
        
        
      </div>
    </div>
  )
}
