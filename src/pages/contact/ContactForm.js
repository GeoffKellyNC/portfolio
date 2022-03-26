import React, { useState } from 'react'
import { send } from 'emailjs-com'
import StyledContactForm from './styles/FormStyled'

import {EMAIL_JS_KEY, TEMPLATE_ID, SERVICE_ID} from '../../constants'

function ContactForm() {
    const [senderName, setSenderName] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [message, setMessage] = useState('')

    const handelName = (evt) => {
        setSenderName(evt.target.value)
    }

    const handelEmail = (evt) => {
        setSenderEmail(evt.target.value)
    }

    const handelMessage = (evt) => {
        setMessage(evt.target.value)
    }

    const sendMail = (evt) => {
        evt.preventDefault();
        send(
            `${SERVICE_ID}`,
            `${TEMPLATE_ID}`,
            {senderName, senderEmail, message},
            `${EMAIL_JS_KEY}`
        )
        .then((res) => {
            console.log('Message Sent', res.status, res.text)
        })
        .catch((err) => console.err('Failed', err))
        setSenderName('');
        setSenderEmail('');
        setMessage('');
    }

  return (
        <StyledContactForm onSubmit={sendMail} className = 'contact-form'>
            <input type = 'text' 
                name = 'senderName' 
                value = {senderName} 
                required 
                placeholder = 'Name'
                onChange = {handelName}
                className = 'input-box'
                 />
            <input type = 'email' 
                name = 'senderEmail' 
                value = {senderEmail} 
                required 
                placeholder = 'Email'
                onChange = {handelEmail}
                className = 'input-box'
                 />
            <textarea name = 'message' 
                value = {message} 
                required 
                placeholder = 'Message' 
                onChange = {handelMessage}
                className = 'input-box'
                rows = '5'
                cols = '40'
                />
            <button type = 'submit' className = 'btn'>Submit</button>
        </StyledContactForm>
  )
}

export default ContactForm