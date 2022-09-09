import React from 'react'
import styled from 'styled-components'

import ContactForm from './components/ContactForm'

function Contact({contactRef}) {
  return (
    <ContactStyled>
        <div className = 'title-container'>
            <div ref = {contactRef} className = 'contact-title'>
                <h1>
                    <span className = 'num-title'>03.</span>
                CONTACT</h1>
            </div>
        </div>

        <ContactForm />
    </ContactStyled>
  )
}

export default Contact;



const ContactStyled = styled.div`
    width: 50%;
    margin: 10rem auto;
    margin-top: 20rem;
    border-radius: 10px;

    .contact-title {
          margin: 2em 0;
          margin-left: 10em;
          color: rgba(238,99,82,1);
          font-family: ${pr => pr.theme.fonts.secondary};
    }

    h1::after{
        content: "";
        display: block;
        position: relative;
        top: -15px;
        width: 300px;
        height: 1px;
        margin-left: 7.5em;
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

    .num-title {
        margin-right: 0.5em;
        color: ${pr => pr.theme.colors.secondary};
    }

    .title-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 0;
        margin-left: 0;
    }

    .contact-title {
        margin-top: 5em;
        margin-left: 4em;
    }

    h1::after{
        width: 100px;
    }

    
`