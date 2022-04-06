import React from 'react';
import { NavLink } from 'react-router-dom'

import styled from 'styled-components';






const SocialIcons = ({icons}) => {
    return(
        <StyledIcons className = 'social-icons-container'>
            <ul>
                {
                    icons.map(icon => {
                        return(
                            <li key = {icon.id}>
                                <NavLink to = {icon.link} className = {`${icon.name}-icon icon`}>
                                    {icon.icon}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </StyledIcons>
    )
}

export default SocialIcons;


const StyledIcons = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;

    ul{
        list-style: none;
        height:23em;
    }

    svg{
        margin: 0.5em 0;
    }

    .Email-icon::after {
        content: "";
        display: block;
        width: 1px;
        height: 6em;
        margin: 0px auto;
        background-color: ${pr => pr.theme.colors.primary};
    }


    .icon{
        font-size: 1.3rem;
        margin: 0.5rem;
        color: ${pr => pr.theme.colors.primary};
    }

    @media (max-width: 956px) {
        display: none;
    }


`