import React from 'react'
import Resume from './components/Resume'
import Skills from './components/Skills'

import AboutStyled from './styles/AboutStyled'


function about() {

  return (
    <AboutStyled>
        <Resume />
        <Skills />
    </AboutStyled>
  )
}

export default about