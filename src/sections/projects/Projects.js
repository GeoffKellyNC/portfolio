import React, { useState } from "react";
import styled from "styled-components";

//! -- Importing Project Images -- //

//! -- Import Project Data -- //
import { projectData } from "../../data/projectsData";

import Project from "./components/Project";

const Projects = ({ projectsRef }) => {
  const [projectInfo] = useState(projectData);
  const [projectID, setProjectID] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleProjectClick = (id) => {
    setProjectID(id);
    setIsOpen(true);
    const button = document.querySelector(`.project-${id}`);
    button.classList.toggle("active");
    const buttons = document.querySelectorAll(".project-button");
    buttons.forEach((button) => {
      if (
        button.classList.contains("active") &&
        button !== document.querySelector(`.project-${id}`)
      ) {
        button.classList.remove("active");
      }
    });
  };

  return (
    <StyledProjects className="project-container" ref={projectsRef}>
      <div className="project-title">
        <h1>
          <span className="num-title">01. </span>
          Projects
        </h1>
      </div>
      <div className="project-button-container">
        {projectInfo.map((project) => {
          return (
            <button
              className={`project-button project-${project.id}`}
              key={project.id}
              onClick={() => {
                handleProjectClick(project.id);
              }}
            >
              {" "}
              {project.title}
            </button>
          );
        })}
      </div>
      {isOpen ? (
        <Project
          projectID={projectID}
          projectData={projectInfo}
          setIsOpen={setIsOpen}
        />
      ) : (
        <Project
          projectData={projectData}
          projectID={projectData[0].id}
          setIsOpen={setIsOpen}
        />
      )}
    </StyledProjects>
  );
};

export default Projects;

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 23em;
  color: ${(pr) => pr.theme.colors.primary};
  font-family: ${(pr) => pr.theme.fonts.secondary};

  .project-title {
    margin: 2em 0;
  }

  .num-title {
    margin-right: 0.5em;
    color: ${(pr) => pr.theme.colors.secondary};
  }

  h1::after {
    content: "";
    display: block;
    position: relative;
    top: -15px;
    width: 200px;
    height: 3px;
    margin-left: 8.5em;
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

  .project-button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2em;
    gap: 1em;
  }

  .project-button {
    background: transparent;
    border-bottom: 2px solid ${(pr) => pr.theme.colors.secondary};
    border-radius: 5px;
    color: ${(pr) => pr.theme.colors.primary};
    font-family: ${(pr) => pr.theme.fonts.secondary};
    font-size: 1.2em;
    padding: 0.5em 1em;
    margin: 0.5em;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background: ${(pr) => pr.theme.colors.secondary};
      color: ${(pr) => pr.theme.colors.primary};
    }
  }

  .active {
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
    animation: moveGradient 4s alternate infinite;
    color: ${(pr) => pr.theme.colors.secondary};
    border: none;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 0.5em 1em;
    margin: 0.5em;

    .project-button-container {
      flex-direction: column;
      align-items: center;
      gap: 1em;
    }
  }
`;
