import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';

//! -- Importing Project Images -- //

//! -- Import Project Data -- //
import { projectData } from '../../data/projectsData';

import Project from './components/Project';




const Projects = ({projectsRef}) => {
    const [projectInfo] = useState(projectData);

    const { path, url } = useRouteMatch();

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
                                <NavLink 
                                    to = {`${url}${project.id}`} 
                                    className = 'project-link '
                                    key = {project.id}
                                    > {project.title}</NavLink>
                            )
                        })
                    }
                </div>
            <Route path = {`${path}:projectID`} >
                <Project projectData = {projectInfo} />
            </Route>
        </StyledProjects>
    )
}

export default Projects;





const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16em;
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

    .project-nav-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 2em;
        gap: 1em;
    }
    

    .project-link {
        text-decoration: none;
        color: ${pr => pr.theme.colors.secondary};
        font-size: ${pr => pr.theme.fontSizes.small};
        font-weight: ${pr => pr.theme.fontWeights.bold};
        margin: 1em 0;
        padding: 0.5em;
        border: 1px solid ${pr => pr.theme.colors.primary};
        border-radius: 5px;
        transition: all .2s ease-in-out;
        &:hover {
            color: ${pr => pr.theme.colors.primary};
        }
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



