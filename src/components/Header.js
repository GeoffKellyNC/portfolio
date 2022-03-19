import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { links } from '../data/headerData'

import HeaderStyled from '../styles/HeaderStyled'
import { DiGithubBadge, DiGithubFull } from "react-icons/di";
import { GrMenu } from 'react-icons/gr'
import MobileNav from './MobileNav';

const Header = (props) => {
    const [open, setOpen] = useState(false)


    const hamburgerClick = (e) => {
        setOpen(!open);
    }

    return(
        <HeaderStyled className = 'header'>
            <div className = 'git-logo-text'>
                <a href = "https://github.com/GeoffKellyNC" target = "_blank" rel="noreferrer" >
                <DiGithubBadge className = 'git-log' />
                <DiGithubFull className = 'git-text' />
                </a>
            </div>
            <GrMenu className = 'hamburger'
                    onClick = {(e) => hamburgerClick(e)} />
            <nav>
                {
                   links.map(link => {
                       return(
                           <Link key = {link.id} className={link.className} to={link.to}>{link.name}</Link>
                       )
                   }) 
                }
            </nav>
            {
                open && <MobileNav className = 'mobile-nav' />
            }
      </HeaderStyled>
    )
}

export default Header;