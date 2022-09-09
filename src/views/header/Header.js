//!-- React Imports --//
import React, {useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
//!-- Importing Mobile Menu icon --//
import {BiMenuAltLeft} from 'react-icons/bi';
//! -- React Router Dom Imports -- //
import {NavLink} from 'react-router-dom'
//!--Importing Styled Components --// <--At bottom of file --
import styled from 'styled-components';

//!--Navigation Data Import --//
import {navData} from '../../data/headerData';

//!-- Importing MobileNav component --//
import MobileNav from './components/MobileNav'

const Header = ({handleProjectClick, handleContactClick, handleAboutClick}) => {
    //! State for Mobile Menu
    const [isOpen, setIsOpen] = useState(false);


    //! Handling Clicks based on their text content. Functions determined by UseRef
    const handleClick = (e) => {
        console.log(e.target.textContent)
        if (e.target.textContent === 'PROJECTS' || e.target.textContent === '01') {
            setIsOpen(false);
           return handleProjectClick();
        }
        if (e.target.textContent === 'CONTACT' || e.target.textContent === '03') {
            setIsOpen(false);
            return handleContactClick();
        }

        if (e.target.textContent === 'ABOUT' || e.target.textContent === '02'){
            setIsOpen(false)
            return handleAboutClick();
        }
        

    }


    return (
        <HeaderStyled>
            {
                !isOpen ? <BiMenuAltLeft size = {"5em"} color = {'#F0A202'} className = 'ham-icon' onClick = {() => setIsOpen(!isOpen)} /> : <AiOutlineClose size = {"3em"} color = {'#EE6352'} className = 'ham-icon' onClick = {() => setIsOpen(!isOpen)} />
            }
            <nav className = 'nav'>
                {
                    navData.map(item => {
                        return(
                            <NavLink
                                key={item.id} 
                                to={item.to} 
                                className={item.className}
                                onClick = {(e) => handleClick(e)}>
                                <span name = {item.num} className = 'num'>{item.num}</span>
                                <span name = {item.name} className = 'name'>{item.name}</span>
                            </NavLink>
                        )
                    })
                }
            </nav>
            {
                isOpen && <MobileNav  handleClick = {handleClick} setIsOpen = {setIsOpen}/>
            }
        </HeaderStyled>
    )
}

export default Header;


//!--Styled Components --//

const HeaderStyled = styled.header`  
    ${'' /* display: flex; */}
    background-color: ${pr => pr.theme.colors.black};  
    box-shadow: 0 10px 20px -10px black;
    height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 2rem;
    overflow: hidden;
    z-index: 100;
    width: 100%; 
    margin: auto;
    top: 0;

    .nav {
        display: flex;
        position: sticky;
        top: 0;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        margin: 0;
        list-style: none;
        font-family: ${pr => pr.theme.fonts.secondary};
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: ${pr => pr.theme.fontWeights.normal};
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease-in-out;
    }

    .num {
            margin-right: 1rem;
            color: ${pr => pr.theme.colors.primary};
        }

    .name{
        font-weight: ${pr => pr.theme.fontWeights.normal};
    }

    .nav a {
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: white;    
    }
    .nav a:hover {
        color: ${pr => pr.theme.colors.secondary};
    }

    span {
        margin: 0;
        padding: 0;
        font-family: ${pr => pr.theme.fonts.primary};
        font-size: ${pr => pr.theme.fontSizes.small};
        font-weight: ${pr => pr.theme.fontWeights.light};
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease-in-out;
    }



    .ham-icon {
        display: none;
    }

    @media (max-width: 670px) {
        .ham-icon {
            display: flex;
        }

        .nav {
            display: none;
        }

    }

        

`;
