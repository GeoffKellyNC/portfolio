import React from 'react';

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

    svg:hover{
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        transform: scale(3);
    }

    .Email-icon::after {
        content: "";
        display: block;
        width: 2px;
        height: 6em;
        margin: 0px auto;
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

    @keyframes moveGradient {
        50% {
            background-position: 100% 50%;
        }
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