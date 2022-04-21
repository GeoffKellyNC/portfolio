/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect  } from 'react'
import './App.scss';

import { AiOutlineArrowDown } from 'react-icons/ai';

//!--Importing Styled Components --// <--At bottom of file --
import styled from 'styled-components';


//!--Components --//
import Header from './sections/header/Header';
import SocialIcons from './components/SocialIcons'
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
import About from './sections/about/About';

//! -- Icons Data -- //
import { socialIcons } from './data/socialIconsData';

//!-- Importing Resume PDF --//
import resume from './data/geoff-kelly-2022.pdf';

//!-- Importing Site Loader --//
import RingLoader from "react-spinners/RingLoader";



function App() {
  //!--State--//
  const [icons] = useState(socialIcons);
  const [loading, setLoading] = useState(true);

  //!--Refs--//
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);


//!-- Click Handlers --//
  const handleProjectClick = () => {
    projectsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  //!-- Site Pre Loader --//

  useEffect(() => {

    setTimeout(() => {
        setLoading(!loading)
    }, 2000);

  },[])






  return (
    <StyledApp className="App">
      {
        loading ?                      //!-- Loading Screen --//
        <div className = 'loader'>
          <RingLoader
            color = {'red'}
            loading = {loading} 
            size = {"10em"} /> 
        </div>
        :
        <>
          <div className='header-container'>
              <Header handleProjectClick={handleProjectClick} handleContactClick={handleContactClick} handleAboutClick = {handleAboutClick} />
            </div><SocialIcons icons={icons} />
              <section className='content-container'>
                <div className='top-text-container'>
                  <div className='hi-text'>
                    <h1 className='text'>Hi, my name is</h1>
                  </div>
                  <div className='name-text'>
                    <h2 className='text'>Geoff Kelly</h2>
                  </div>
                  <div className='statement-text'>
                    <h3> Problem Solver. Full Stack Developer</h3>
                  </div>
                  <div className='about-paragraph'>
                    <p className='text'> I am a software engineer specializing in building (and occasionally designing) full stack applications.I have a passion for problem solving and a love for learning new technologies.I am currently looking for ways to continue to grow my abilities.</p>
                  </div>
                  <a href={resume} target='_blank' rel="noreferrer" className='resume-link'>
                    <div className='resume-btn'>
                      <span className='resume-text'>RESUME</span>
                    </div>
                  </a>
                </div>
                <div className = 'scroll-down'>
                  <span className = 'scroll-text'>scroll down</span>
                  <AiOutlineArrowDown className = 'scroll-arrow'/>
                </div>
                <div className = 'scroll-down scroll-down--left'>
                  <span className = 'scroll-text'>scroll down</span>
                  <AiOutlineArrowDown className = 'scroll-arrow'/>
                </div>
              </section>
              <section className='projects-container'>
                <Projects projectsRef={projectsRef} />
              </section>
              <section className='about-container'>
                <About aboutRef={aboutRef} />
              </section>
              <section className='contact-container'>
                <Contact contactRef={contactRef} />
              </section>
            </>
 
      }
    </StyledApp>
  );
}

export default App;



//!--Styled Components --//
const StyledApp = styled.div`

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10em;
  }
  

  .top-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 5em;
    margin-left: 2em;
  }

  .top-text-container h1 {
    font-size: ${pr => pr.theme.fontSizes.small};
    font-weight: bold;
    color: ${pr => pr.theme.colors.primary};
    font-family: ${pr => pr.theme.fonts.secondary};
  }
  .top-text-container h2 {
    font-size: ${pr => pr.theme.fontSizes.extraLarge};
    color: white;
    font-family: ${pr => pr.theme.fonts.primary};
  }

  .top-text-container h3 {
    font-size: ${pr => pr.theme.fontSizes.large};
    color: ${pr => pr.theme.colors.secondary};
    font-family: ${pr => pr.theme.fonts.primary};
    font-weight: 300;
  }

  .top-text-container p {
    font-size: ${pr => pr.theme.fontSizes.tiny};
    color: white;
    font-family: ${pr => pr.theme.fonts.primary};
    font-weight: 300;
    max-width: 50em;
    padding-top: 2em;
  }

  .text{
    margin-bottom: 1rem;
  }


  //!-- Resume Button --//
  .resume-btn {
    border: 1px solid ${pr => pr.theme.colors.primary};
    color: white;
    margin: 2rem 0;
    border-radius: 8px;
  }

  .resume-link{
    text-decoration: none;
  }

  .resume-btn:hover {
    background-color: ${pr => pr.theme.colors.secondary};
    transition: 0.2s;
  }

  .resume-text {
    font-size: ${pr => pr.theme.fontSizes.small};
    font-weight: bold;
    color: ${pr => pr.theme.colors.primary};
    font-family: ${pr => pr.theme.fonts.secondary};
    padding: 0.5rem 1rem;
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .scroll-down {
    position: absolute;
    right: 2.5em;
    bottom: 2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${pr => pr.theme.fontSizes.small};
    color: ${pr => pr.theme.colors.secondary};
}

.scroll-down--left {
    left: 4em;
    right: auto;
}

.scroll-down span {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    animation-name: bounce-1;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}



@keyframes bounce-1 {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
  }
  100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
  }
}

  @media (max-width: 768px) {


    .top-text-container {
      margin-left: 1rem;
      margin-top: 0;
    }

    .top-text-container p {
      max-width: 90%;
      margin: auto;
      margin-left: 0;
  }

  .scroll-down {
    display: none;
  }


  //! -- AboutMe Section -- //

 
  




`