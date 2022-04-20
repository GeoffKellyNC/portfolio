import React, { useState } from 'react';
import styled from 'styled-components';

//! -- Importing Project Images -- //

//! -- Import Project Data -- //
import { projectData } from '../../data/projectsData';

import Project from './components/Project';




const Projects = ({projectsRef}) => {
    const [projectInfo] = useState(projectData);
    const [projectID, setProjectID] = useState(null);
    const [isOpen, setIsOpen] = useState(false);


    const handleProjectClick = (id) => {
        setProjectID(id);
        setIsOpen(true);
    }


    return(
        <StyledProjects className = 'project-container' ref = {projectsRef} >
            <div  className = 'project-title'>
                <h1>
                    <span className = 'num-title'>01.</span>
                Projects</h1>
            </div>
                <div className = 'project-nav-container'>
                    {
                        projectInfo.map(project => {
                            return(
                                <button 
                                    className = 'project-button '
                                    key = {project.id}
                                    onClick = {() => {handleProjectClick(project.id)} }
                                    > {project.title}</button>
                            )
                        })
                    }
                </div>
                {
                    isOpen && <Project projectID = {projectID} projectData = {projectInfo} setIsOpen = {setIsOpen}/>
                }
        </StyledProjects>
    )
}

export default Projects;





const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20em;
    color: ${pr => pr.theme.colors.primary};
    font-family: ${pr => pr.theme.fonts.secondary};

    .project-title {
        margin: 2em 0;
    }

    .num-title {
        margin-right: 0.5em;
        color: ${pr => pr.theme.colors.secondary};
    }

    h1::after{
        content: "";
        display: block;
        position: relative;
        top: -15px;
        width: 200px;
        height: 1px;
        margin-left: 7.5em;
        background: linear-gradient(
        60deg,
        hsl(224, 85%, 66%),
        hsl(269, 85%, 66%),
        hsl(314, 85%, 66%),
        hsl(359, 85%, 66%),
        hsl(44, 85%, 66%),
        hsl(89, 85%, 66%),
        hsl(134, 85%, 66%),
        hsl(179, 85%, 66%)
        );
        background-size: 300% 300%;
        background-position: 0 50%;
        border-radius: calc(2 * var(--border-width));
        animation: moveGradient 4s alternate infinite;
    }

    @keyframes moveGradient {
        50% {
            background-position: 100% 50%;
        }
    }

    .project-nav-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 2em;
        gap: 1em;
    }
    

    .project-button {
        background: ${pr => pr.theme.colors.secondary};
        color: ${pr => pr.theme.colors.primary};
        border: none;
        border-radius: calc(2 * var(--border-width));
        padding: 1em;
        font-size: 1.5em;
        font-weight: bold;
        width: 15em;
        margin: 0.5em;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            background: ${pr => pr.theme.colors.primary};
            color: ${pr => pr.theme.colors.secondary};
    }
    



    @media (max-width: 768px) {
        margin-top: 10em;

        h1::after{
            width: 100px;
        }

        .project-nav-container {
            flex-direction: column;
            gap: 1em;
        }

    }

    



`



