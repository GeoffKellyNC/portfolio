import React, { useState } from "react";
import styled from "styled-components";

//! -- Importing Project Images -- //

//! -- Import Project Data -- //
import { projectData } from "../../data/projectsData";
import Project from './components/Project'


const Projects = ({ projectsRef }) => {


  return (
    <StyledProjects className="project-container" ref={projectsRef}>
      <div className = 'projects-grid'>
        { !projectData ? <span className = 'loading'> Projects Loading </span> :
          projectData.map((project, idx) => {
            return <Project key = {idx} projectData = {project} />
          })
        }
      </div>

    </StyledProjects>
  );
};

export default Projects;

const StyledProjects = styled.div`

`;
