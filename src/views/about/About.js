/* eslint-disable no-unused-vars */
import "./scss/about.scss";

import React, { useState } from "react";
import styled from "styled-components";




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
            <p>
              I'm a full-stack web developer with a passion for creating beautiful
              and functional websites. I'm currently looking for a position in
              the field of web development.
            </p>
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
        color: ${(pr) => pr.theme.colors.primary}
    }

    .num-title {
        margin-right: 0.5em;
        color: ${(pr) => pr.theme.colors.secondary};
    }



    .about-content{
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
        font-size: ${(pr) => pr.theme.fontSizes.small};
        color: ${(pr) => pr.theme.colors.primary};
        font-family: ${(pr) => pr.theme.fonts.secondary};
        width: 40%;
    }

    @media (max-width: 768px) {
        .card-container {
            flex-direction: column;
      }
    }





`;
