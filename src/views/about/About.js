/* eslint-disable no-unused-vars */
import "./scss/about.scss";

import React from "react";
import styled from "styled-components";

import Tech from "./components/Tech";

function About({ aboutRef }) {
  return (
    <StyledAbout>
      <div ref={aboutRef} className="about-title">
        <h1>
          <span className="num-title">02.</span>
          ABOUT
        </h1>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className="a-text">
            I love using technologies to bring ideas to life and make improve
            the quality of peoples lives. I feel my unique life experiences,
            give me a unique perspective on the world, and I want to combine
            that experience with my skills to create a better world, through
            technology.
          </p>
          <p className="b-text">Technologies that I have worked with are:</p>
          <Tech />
          <div className="github-img-container"></div>
        </div>
        <div className="blob"></div>
      </div>
    </StyledAbout>
  );
}

export default About;

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30em;
  font-family: ${(pr) => pr.theme.fonts.secondary};

  .about-title {
    margin: 2em 0;
    color: ${(pr) => pr.theme.colors.primary};
  }

  .num-title {
    margin-right: 0.5em;
    color: ${(pr) => pr.theme.colors.secondary};
  }

  .about-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2em;
    gap: 4em;
  }

  .about-text {
    margin: 2em 0;
    font-size: ${(pr) => pr.theme.fontSizes.tiny};
    color: ${(pr) => pr.theme.colors.primary};
    font-family: ${(pr) => pr.theme.fonts.primary};
    width: 30%;
    line-height: 2em;
    position: relative;
  }

  .about-text-hover {
    color: ${(pr) => pr.theme.colors.secondary};
  }

  @media (max-width: 1000px) {
    margin: 10em 0;

    .about-content {
      flex-direction: column-reverse;
    }

    .about-text {
      width: 90%;
      margin: 0 auto;
    }

    .blob {
      width: 85%;
    }
  }
`;
