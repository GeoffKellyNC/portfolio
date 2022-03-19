import React from 'react'
import { links } from '../data/headerData'
import { Link } from 'react-router-dom'

import MobileNavStyled from '../styles/MobileNavStyled'

function MobileNav() {

  return (
      <MobileNavStyled className = 'mobile-nav'>
          {
            links.map(link =>{
                return(
                    <Link to = {link.to} 
                        className = 'mobile-link'
                    >{link.name}</Link>
                )
            })
          }
      </MobileNavStyled>
  )
}

export default MobileNav