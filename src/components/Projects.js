import React from 'react';
import styled from 'styled-components';




const Projects = () => {
    return(
        <StyledProjects className = 'project-container'>
            <h1><span className = 'num-title'>01.</span>Projects</h1>
            <div className = 'box'></div>
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

    .num-title {
        margin-right: 0.5em;
        color: ${pr => pr.theme.colors.secondary};
    }

    h1::after{
        content: "";
        display: block;
        position: relative;
        top: -15px;
        width: 300px;
        height: 1px;
        margin-left: 7.5em;
        background-color: ${pr => pr.theme.colors.primary};
    }
  
    .box {
        width: 400px;
        height: 600px;
        background-color: ${pr => pr.theme.colors.primary};
        margin-top: 2em;
    }


`



