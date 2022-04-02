import React from 'react'

import Urlbox from "urlbox";

import ProjectsStyled from './styles/ProjectsStyled'

function Projects() {

  const urlbox = Urlbox('zWT7OzETgf0x8rXm','6eb71db595dd4a9293fc2acb0fb2f3f7')

  const options = {
    url: 'https://stewart-fastener-site.vercel.app/',
    thumb_width: '200',
    format: 'jpg',
    quality: '100',
  };

  const imgUrl = urlbox.buildUrl(options);


  return (
    <ProjectsStyled>
      <div className = 'text'>
        <h1>WORK IN PROGRESS :)</h1>
        <h2> PAGE COMING SOON!</h2>
      </div>
      <img src = {imgUrl} alt = 'site-shot'/>
    </ProjectsStyled>
  )
}

export default Projects