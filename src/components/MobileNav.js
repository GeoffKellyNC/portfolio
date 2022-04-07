import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom'


//!--Navigation Data Import --//
import { navData } from '../data/headerData';



const MobileNav = ({  handleClick, setIsOpen }) => {


    useEffect(() => {
        document.querySelector('.navLink').addEventListener('click', () => {
              setIsOpen(false)
          })
          return () => {
                document.querySelector('.navLink').removeEventListener('click', () => {
                    setIsOpen(false)
                })
            }
      }, [setIsOpen])


    return (
        <nav className = 'mobile-nav'>
        {
            navData.map(item => {
                return(
                    <NavLink 
                        key={item.id} 
                        to={item.to} 
                        className={`${item.className} navLink`}
                        onClick = {(e) => handleClick(e)}>
                        <span className = 'num'>{item.num}</span>
                        <span className = 'name'>{item.name}</span>
                    </NavLink>
                )
            })
        }
    </nav>
    )
}


export default MobileNav;