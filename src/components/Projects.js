import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';

//! -- Importing Project Images -- //

//! -- Import Project Data -- //
import { projectData } from '../data/projectsData';

import Project from './Project';




const Projects = ({projectsRef}) => {
    const [projectInfo] = useState(projectData);

    const { path, url } = useRouteMatch();

    return(
        <StyledProjects className = 'project-container'>
            <div ref = {projectsRef} className = 'project-title'>
                <h1>
                    <span className = 'num-title'>01.</span>
                Projects</h1>
            </div>
            <div>
                <div>
                    <NavLink to = {`${url}1`} className = 'project-link'> Project 1
                    </NavLink>
                    <NavLink to = {`${url}2`} className = 'project-link'> Project 2
                    </NavLink>
                </div>
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



    @media (max-width: 768px) {
        margin-top: 10em;

        h1::after{
            width: 100px;
        }

    }

    



`



