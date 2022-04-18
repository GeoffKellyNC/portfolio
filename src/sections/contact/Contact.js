import styled from 'styled-components'
import React from 'react'
import ContactForm from './components/ContactForm'


function Contact({ contactRef }) {
  return (
    <ContactStyled>
      <div ref = {contactRef} className = 'contact-title'>
                <h1>
                    <span className = 'num-title'>03.</span>
                CONTACT</h1>
            </div>
        <ContactForm />
    </ContactStyled>
  )
}

export default Contact;



const ContactStyled = styled.div`
    width: 50%;
    margin: 20rem auto;
    margin-top: 30rem;
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
        width: 200px;
        height: 1px;
        margin-left: 7.5em;
        background-color: ${pr => pr.theme.colors.primary};
    }

    .num-title {
        margin-right: 0.5em;
        color: ${pr => pr.theme.colors.secondary};
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