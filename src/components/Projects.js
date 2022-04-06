import React from 'react';
import styled from 'styled-components';

//! -- Importing Project Images -- //
import stewartFastenerHome from '../images/stewart-fastener.webp';




const Projects = () => {
    return(
        <StyledProjects className = 'project-container'>
            <div className = 'project-title'>
                <h1><span className = 'num-title'>01.</span>Projects</h1>
            </div>
            <div className = 'project-1-container'>
                <img 
                    src = {stewartFastenerHome} 
                    alt = 'Stewart Fastener' 
                    className = 'project-1-img'/>
                <div className = 'project-1-text'>
                    <h2>PROJECT NAME:</h2><span>Stewart Fasteners</span>
                </div>
            </div>
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

    .project-1-container {
        border: 1px solid ${pr => pr.theme.colors.primary};
        width: 80%;
        margin: auto;
        border-radius: 5px;
        display: flex;
        gap: 1em;
    }
  
    .project-1-img {
        width: 400px;
        height: 600px;
        margin-top: 2em;
        padding: 1em;
    }

    .project-1-text {
        display: flex;
        margin-top: 2.3em;
    }

    .project-1-text h2 {
        color: ${pr => pr.theme.colors.secondary};
    }

    .project-1-text span {
        font-size: ${pr => pr.theme.fontSizes.small};
        margin-top: 5px;
    }


    @media (max-width: 768px) {
        margin-top: 10em;

        h1::after{
            width: 100px;
        }

        .box {
            width: 300px;
        }
    }

    .project-1-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .project-1-text{
        display: flex;
        flex-direction: column;
    }

    .project-1-img {
        width: 250px;
        height: 400px;
        margin-top: 2em;
    }


`



