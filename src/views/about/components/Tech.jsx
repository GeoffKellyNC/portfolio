import React from "react";
import styled from "styled-components";

const Tech = () => {
  return (
    <TechStyled className="tech-list-container">
      <ul className="tech-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node</li>
        <li>Express</li>
        <li>Terminal</li>
        <li>Git</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
      </ul>
    </TechStyled>
  );
};

export default Tech;

const TechStyled = styled.div`
  .tech-list-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .tech-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
  }

  .tech-list li {
    list-style: none;
    margin: 0.5rem;
    font-size: 1.5rem;
    font-family: ${(pr) => pr.theme.fonts.primary};
    font-size: ${(pr) => pr.theme.fontSizes.small};
  }

  .tech-list li::before {
    content: "⌬";
    margin-right: 0.5rem;
    color: ${(pr) => pr.theme.colors.secondary};
  }
`;
