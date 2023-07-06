import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";
import styled from "styled-components";

const Project = ({ projectData }) => {


  return (
    <StyledProject className="project-card-container">
      <div>{projectData.title}</div>
    </StyledProject>
  );
};

export default Project;

const StyledProject = styled.div`


`;
