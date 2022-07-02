import React from 'react'
import styled from 'styled-components'

import { socialIcons } from '../../data/socialIconsData'

import { FaGithubAlt } from 'react-icons/fa';


const Footer = () => {



  return (
    <StyledFooter>
        <div className="footer-container">
            <div className="footer-text">
                <p className='copyright'>© 2022, All Rights Reserved</p>
                <p className='copyright'>Created by: <a href="mailto: geoffkellync@gmail.com " target="_blank" rel="noopener noreferrer"> Geoffrey Kelly </a></p>
                <p className = 'portfolio-github-link'>
                    <a href="https://github.com/GeoffKellyNC/portfolio" target="_blank" rel="noopener noreferrer">
                        <span> <FaGithubAlt /> </span>
                    </a>
                </p>
            </div>
        </div>


                
    </StyledFooter>
  )
}

export default Footer


const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
    color: ${pr => pr.theme.colors.secondary};
    font-family: ${pr => pr.theme.fonts.secondary};
    font-size: ${pr => pr.theme.fontSizes.tiny};
    font-weight: bold;
    text-align: center;

    a{
        text-decoration: none;
        color: ${pr => pr.theme.colors.primary};
    }

    .github-logo{
        width: 2em;
        height: 2em;
        margin-left: 1em;
    }
    
    .portfolio-github-link{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1em;
    }






`