import React, { useState } from 'react'
import styled from 'styled-components'

import CardInfo from './components/CardInfo'


import Cards from './components/Cards'

import { cardData } from '../../data/aboutData'

import './scss/about.scss'

function About( { aboutRef } ) {
    const [data] = useState(cardData)
    const [cardID, setCardID] = useState(null)
    const [isOpen, setIsOpen] = useState(false)


    const handleCardClick = (id) => {
        setCardID(id)
        setIsOpen(true)
    }

  return (
    <StyledAbout>
        <div ref = {aboutRef} className = 'about-title'>
            <h1>
                <span className = 'num-title'>02.</span>
            ABOUT</h1>
        </div>
        <div className = 'blob'></div>
        <div className = 'card-container'>
        { 
            data.map(card => {
                return(
                    <Cards key = {card.id} info = {card} handleCardClick = {handleCardClick} />
                )
            })
        }
        {
            isOpen && <CardInfo cardID = {cardID} cardInfo = {data} setIsOpen = {setIsOpen} isOpen = {isOpen} />
        }
        </div>

    </StyledAbout>
  )
}

export default About


const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30em;
    font-family: ${pr => pr.theme.fonts.secondary};

    .about-title {
        margin: 2em 0;
        color: ${pr => pr.theme.colors.primary}
    }

    .num-title {
        margin-right: 0.5em;
        color: ${pr => pr.theme.colors.secondary};
    }

    h1::after{
        content: "";
        display: block;
        position: relative;
        top: -15px;
        width: 200px;
        height: 3px;
        margin-left: 6.5em;
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

    .blob{
        max-width: 100%;
        margin-top: 5em;
        
    }

    .card-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 2em;
    }






    @media (max-width: 768px) {
        .card-container {
            flex-direction: column;
    }





`