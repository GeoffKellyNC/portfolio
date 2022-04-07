import React from 'react';

import styled from 'styled-components';

import { FaGithubSquare } from 'react-icons/fa';

const Project = ({ projectData }) => {
    return(
        <StyledProject className = 'project-card-container'>
            <img
                src = {projectData.imageSrc}
                alt = 'Project Screenshot'
                className = 'project-card-img' />
            <div className = 'project-card-text'>
                <h2>PROJECT NAME:</h2><span>{projectData.title}</span>
                <h2 className = 'desc-text'>PROJECT DESCRIPTION:</h2><p className = 'project-desc'>{projectData.description}</p>
                <h2 className = 'desc-text'>PROJECT TECHNOLOGIES:</h2><p className = 'project-desc'>{projectData.technologies.join(', ')}</p>
                <a href = {projectData.githubLink}>
                    <FaGithubSquare className = 'github-icon'  />
                </a>
            </div>

        </StyledProject>
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

    .github-icon {
        color: ${pr => pr.theme.colors.secondary};
        font-size: 5rem;
    }

    .github-icon:hover {
        color: ${pr => pr.theme.colors.primary};
        transform: scale(1.2);
        transition: all .2s ease-in-out;
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

        .github-icon {
            font-size: 3rem;
        }
    }

`