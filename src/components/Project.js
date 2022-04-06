import React from 'react';

import styled from 'styled-components';

const Project = ({ projectData }) => {
    return(
        projectData.map(project => {
            return(
                <StyledProject className = 'project-card-container'>
                    <img
                        src = {project.imageSrc}
                        alt = 'Project Screenshot'
                        className = 'project-card-img' />
                    <div className = 'project-card-text'>
                        <h2>PROJECT NAME:</h2><span>{project.title}</span>
                        <h2 className = 'desc-text'>PROJECT DESCRIPTION:</h2><p className = 'project-desc'>{project.description}</p>
                        <h2 className = 'desc-text'>PROJECT TECHNOLOGIES:</h2><p className = 'project-desc'>{project.technologies.join(', ')}</p>
                    </div>
                </StyledProject>
            )
        })
    )
}


export default Project;



const StyledProject = styled.div`
        border: 1px solid ${pr => pr.theme.colors.primary};
        width: 70%;
        margin: auto;
        border-radius: 5px;
        display: flex;


    .project-card-img {
        width: 400px;
        height: 600px;
        margin-top: 2em;
        padding: 1em;
    }

    .project-card-text {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        padding-left: 8%;
        gap: 3em;
    }

    .project-card-text h2 {
        color: ${pr => pr.theme.colors.secondary};
    }

    .project-card-text span {
        font-size: ${pr => pr.theme.fontSizes.small};
        margin-top: 5px;
    }

    .project-desc{
        width: 80%;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;


        .project-card-text{
            display: flex;
            flex-direction: column;
            padding: 0;
        }

        .project-card-img {
            width: 250px;
            height: 400px;
            margin-top: 2em;
        }

        .project-desc{
            margin-top: 1em;
        }
    }

`