import React from "react";
import { getImageUrl } from "../../utils"
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({ 
    project: {title, imgSrc, description, skills, demo, source } 
                           }) =>
{
    // const project = this.props.project
    return (

        <div>
                        <img src={getImageUrl(imgSrc)} alt={`Image of ${title}`} />
                        <h3>{`${title}`}</h3>
                        <p>{`${description}`}</p>
                        {/* For skills we will use unordered list */}
                        <ul>
                            {
                                skills.map((skill, id) => {
                                  return(<li key={id}>{`${skill}`}</li>)
                                })
                            }
                        </ul>
                        <div>
                            <a href={`${demo}`}>Demo</a>
                            <a href={`${source}`}></a>
                        </div>
        </div>

    )
}