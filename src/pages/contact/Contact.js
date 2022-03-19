import React from 'react'
import ContactForm from './ContactForm'

import ContactStyled from './styles/ContactStyled'

function Contact() {
  return (
    <ContactStyled>
      <div className = 'form-bg'>
        <h3>Contact Me</h3>
        <ContactForm />
      </div>
    </ContactStyled>
  )
}

export default Contact