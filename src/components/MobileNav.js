import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom'


//!--Navigation Data Import --//
import { navData } from '../data/headerData';



const MobileNav = ({  handleClick, setIsOpen }) => {




    return (
        <MobileNavStyled className = 'mobile-nav'>
        {
            navData.map(item => {
                return(
                    <NavLink 
                        key={item.id} 
                        to={item.to} 
                        className={`${item.className} navLink`}
                        onClick = {(e) => handleClick(e)}>
                        <span className = 'num'>{item.num}</span>
                        <span className = 'name'>{item.name}</span>
                    </NavLink>
                )
            })
        }
    </MobileNavStyled>
    )
}


export default MobileNav;


const MobileNavStyled = styled.nav`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 20%;
            background-color: ${pr => pr.theme.colors.secondary};
            width: 100%;
            height: 100%;
            box-shadow: 0 10px 20px -10px black;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            transition: all 0.3s ease-in-out;
       
        a {
            text-decoration: none;
            color: ${pr => pr.theme.colors.black};
            font-family: ${pr => pr.theme.fonts.secondary};
            font-size: ${pr => pr.theme.fontSizes.medium};
            font-weight: ${pr => pr.theme.fontWeights.normal};
            display: flex;
            justify-content: center;
            text-transform: uppercase;
            width: 100%;
            height: 10%;
            padding: 0.5rem 1rem;
            margin: 0;
        }        



`