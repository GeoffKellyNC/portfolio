import React, { useState } from 'react';
import styled from 'styled-components';

//! -- Importing Project Images -- //

//! -- Import Project Data -- //
import { projectData } from '../data/projectsData';

import Project from './Project';




const Projects = () => {
    const [projectInfo] = useState(projectData);

    return(
        <StyledProjects className = 'project-container'>
            <div className = 'project-title'>
                <h1>
                    <span className = 'num-title'>01.</span>
                Projects</h1>
            </div>
            {
                projectInfo.map(project => {
                    return(
                        <Project projectData = {project} key = {project.id} />
                    )
                })
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
    margin-top: 22em;
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
        background-color: ${pr => pr.theme.colors.primary};
    }



    @media (max-width: 768px) {
        margin-top: 10em;

        h1::after{
            width: 100px;
        }

    }

    



`



