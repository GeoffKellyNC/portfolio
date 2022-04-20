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
        </div>
            {
                isOpen && <CardInfo cardID = {cardID} cardInfo = {data} setIsOpen = {setIsOpen}/>
            }
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
        height: 1px;
        margin-left: 6.5em;
        background-color: ${pr => pr.theme.colors.primary};
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