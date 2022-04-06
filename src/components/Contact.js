import styled from 'styled-components'
import React from 'react'
import ContactForm from './ContactForm'


function Contact({ contactRef }) {
  return (
    <ContactStyled>
      <div ref = {contactRef} className = 'contact-title'>
                <h1>
                    <span className = 'num-title'>02.</span>
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
    
`