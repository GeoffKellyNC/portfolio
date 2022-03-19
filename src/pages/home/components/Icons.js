import React from 'react'

import { icons } from '../data/homeData'

import IconsStyled from '../styles/IconsStyled'

function Icons() {
  return (
    <IconsStyled className = 'icons-container'>
        {
            icons.map(icon => {
                return(
                    <img key = {icon.id}
                        className = {icon.className}
                        src = {icon.src}
                        alt = {icon.alt}
                     />
                )
            })
        }
    </IconsStyled>
  )
}

export default Icons