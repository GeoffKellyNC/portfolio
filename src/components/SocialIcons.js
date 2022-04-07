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
                            <a href = {icon.link} className = {`${icon.name}-icon icon`} target = "_blank" rel="noreferrer" >
                                    {icon.icon}
                                </a>
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

    .Email-icon::after:hover {
        background-color: ${pr => pr.theme.colors.primary};
    }


    .icon{
        font-size: 1.3rem;
        margin: 0.5rem;
        color: ${pr => pr.theme.colors.primary};
    }

    .icon:hover{
        color: ${pr => pr.theme.colors.secondary};
    }

    @media (max-width: 956px) {
        display: none;
    }


`