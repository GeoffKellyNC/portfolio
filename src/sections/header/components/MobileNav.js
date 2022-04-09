import React, { useState } from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom'


//!--Navigation Data Import --//
import { navData } from '../../../data/headerData';

//!-- Social Icons Data Import --//
import { socialIcons } from '../../../data/socialIconsData';



const MobileNav = ({  handleClick, setIsOpen }) => {
    const [iconsData] = useState(socialIcons);




    return (
    <MobileNavStyled className = 'mobile-nav'>
        <div className = 'icons-container'>
            {iconsData.map(icon => (
                <li key = {icon.id}>
                    <a href = {icon.link} className = {`${icon.name}-icon icon`} target = "_blank" rel="noreferrer" >{icon.icon}
                    </a>
                </li>
            ))}
        </div>
        <div className = 'top-line'></div>
        <div className = 'link-container'>
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
        </div>
        <div className = 'bottom-line'></div>
    </MobileNavStyled>
    )
}


export default MobileNav;


const MobileNavStyled = styled.nav`
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
       
        .link-container a {
            text-decoration: none;
            color: ${pr => pr.theme.colors.black};
            font-family: ${pr => pr.theme.fonts.secondary};
            font-size: ${pr => pr.theme.fontSizes.medium};
            font-weight: ${pr => pr.theme.fontWeights.normal};
            display: flex;
            justify-content: center;
            text-transform: uppercase;
            width: 100%;
            height: 12%;
            padding: 0.5rem 0;
            margin: 0;
        }

        li {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 12%;
            padding: 0.5rem 0;
            margin: 0;
        }

        .link-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            ${'' /* padding: 0.5rem; */}
            margin: 0;
        }

        .top-line{
            width: 100%;
            height: 1em;
            background-color: ${pr => pr.theme.colors.black};
            position: absolute;
            top: 11em;
            left: 0;
        }

        .bottom-line{
            width: 100%;
            height: 1em;
            background-color: ${pr => pr.theme.colors.black};
            position: absolute;
            bottom: 15em;
            left: 0;
        }

        .icons-container{
            display: flex;
            position: absolute;
            top: 14%;
            left: 0;
            width: 100%;
            justify-content: space-around;
        }

        .icons-container a{
            text-decoration: none;
            color: ${pr => pr.theme.colors.primary};
            font-family: ${pr => pr.theme.fonts.secondary};
            font-size: ${pr => pr.theme.fontSizes.medium};
            font-weight: ${pr => pr.theme.fontWeights.normal};
        }





`