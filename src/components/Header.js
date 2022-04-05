//!-- React Imports --//
import React, { useState } from 'react';

//! -- React Router Dom Imports -- //
import { NavLink } from 'react-router-dom'

//!-- Importing MobileNav component --//
import MobileNav from './MobileNav'

//!--Importing Styled Components --// <--At bottom of file --
import styled from 'styled-components';

//!--Navigation Data Import --//
import { navData } from '../data/headerData';

//!-- Importing Mobile Menu icon --//
import { BiMenuAltLeft } from 'react-icons/bi';







const Header = () => {
    //! State for Mobile Menu
    const [isOpen, setIsOpen] = useState(false);




    return (
        <HeaderStyled>
            <BiMenuAltLeft 
                size = {"5em"}
                className = 'ham-icon'
                onClick = {() => setIsOpen(!isOpen)} />
            <nav className = 'nav'>
                {
                    navData.map(item => {
                        return(
                            <NavLink key={item.id} to={item.to} className={item.className}>
                                <span className = 'num'>{item.num}</span>
                                <span className = 'name'>{item.name}</span>
                            </NavLink>
                        )
                    })
                }
            </nav>
            {
                isOpen && <MobileNav />
            }
        </HeaderStyled>
    )
}

export default Header;


//!--Styled Components --//

const HeaderStyled = styled.div`  
    display: flex;
    background-color: ${pr => pr.theme.colors.black};  
    color: white;
    box-shadow: 0 10px 20px -10px black;
    height: 70px;

    .nav {
        display: flex;
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
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease-in-out;
        a {
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease-in-out;
            &:hover {
                color: ${pr => pr.theme.colors.secondary};
            }
        }
    }

    span {
        margin: 0;
        padding: 0;
        font-family: ${pr => pr.theme.fonts.primary};
        font-size: ${pr => pr.theme.fontSizes.small};
        font-weight: ${pr => pr.theme.fontWeights.light};
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease-in-out;
    }

    .num {
        margin-right: 1rem;
        color: ${pr => pr.theme.colors.primary};
    }

    .ham-icon {
        display: none;
    }

    @media (max-width: 670px) {
        .ham-icon {
            display: block;
        }

        .nav {
            display: none;
        }

        .mobile-nav {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 20%;
            background-color: ${pr => pr.theme.colors.secondary};
            width: 50%;
            height: 60%;
            padding: 0.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 20px -10px black;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            transition: all 0.3s ease-in-out;
        a {
            color: white;
            margin: 2rem 0;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease-in-out;
            &:hover {
                color: ${pr => pr.theme.colors.black};
            }
        }
        }
    }

        

`;
