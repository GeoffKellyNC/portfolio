import React, { useState, useEffect } from 'react'
import { send } from 'emailjs-com'
import styled from 'styled-components'

import {EMAIL_JS_KEY, TEMPLATE_ID, SERVICE_ID} from '../constants'

function ContactForm() {
    const [senderName, setSenderName] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

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
            res.status === 200 ? setSuccess(true) : setError('Something went wrong')
        })
        .catch((err) => console.err('Failed', err))
        setSenderName('');
        setSenderEmail('');
        setMessage('');
    }


    //! -- Setting timeout for success message
    useEffect(() => {
        if (success) {
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }
        if (error) {
            setTimeout(() => {
                setError('')
            }, 3000)
        }
    }, [success, error])

  return (
        <>
            {
                success ? <span>Message Sent!</span> : error ? <span>{error}</span> : null
            }
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
        </>
  )
}

export default ContactForm


const StyledContactForm = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 80%;
        margin: 0 auto;
        ${'' /* border: 1px solid ${props => props.theme.colors.primary}; */}
    input{
        margin-bottom: 5%;
        color: white;
    }
    .input-box{
        border:0;
        border-bottom:2px solid ${pr => pr.theme.colors.primary};  
        background:transparent;
        width:100%;
        padding:8px 0 5px 0;
        font-size:16px;
    }
    input::placeholder {
        color: ${pr => pr.theme.colors.secondary};
        font-family: ${pr => pr.theme.MainFont}
    }
    textarea {
        color: white;
    }
    textarea::placeholder {
        color: ${pr => pr.theme.colors.secondary};
        font-family: ${pr => pr.theme.MainFont}
    }
    button{
        border: 1px solid ${pr => pr.theme.colors.primary};
        width: 25%;
        height: 40px;
        background: none;
        margin: 2rem 0;
        border-radius: 8px;
        color: ${pr => pr.theme.colors.secondary};
    }

    button:hover {
        background-color: ${pr => pr.theme.colors.secondary};
        color: ${pr => pr.theme.colors.primary};
        transition: all 0.3s ease-in-out;
        transform: scale(1.1);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 100%;
        input{
            width: 100%;

    }
`