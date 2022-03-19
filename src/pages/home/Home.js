/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import { Link } from 'react-router-dom';

import HomeStyled from './styles/HomeStyled'

import Text from './components/Text'
import ContactButton from './components/ContactButton';
import AboutMeButton from './components/AboutMeButton';


function Home() {
  return (
    <HomeStyled className = 'home-component'>
      <Text />
      {/* <Icons /> */}
      <div className = 'btn-container'>
        <Link to = "/Contact">
          <ContactButton className = 'contact-btn' />
        </Link>
        <Link to = "/About">
          <AboutMeButton className = 'about-btn' />
        </Link>
      </div>
      
    </HomeStyled>
    
  )
}

export default Home