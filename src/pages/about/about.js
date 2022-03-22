import React from 'react'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Education from './components/Education'

import AboutStyled from './styles/AboutStyled'


function about() {

  return (
    <AboutStyled>
        <Resume />
        <Skills />
        <Education />
    </AboutStyled>
  )
}

export default about 