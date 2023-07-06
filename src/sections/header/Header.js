import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { navData } from '../../data/headerData';
import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import MobileNav from './components/MobileNav';

const Header = ({ handleProjectClick, handleContactClick, handleAboutClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === 'PROJECTS' || e.target.textContent === '01') {
      setIsOpen(false);
      return handleProjectClick();
    }
    if (e.target.textContent === 'CONTACT' || e.target.textContent === '03') {
      setIsOpen(false);
      return handleContactClick();
    }
    if (e.target.textContent === 'ABOUT' || e.target.textContent === '02') {
      setIsOpen(false);
      return handleAboutClick();
    }
  };

  return (
    <HeaderStyled>
      {!isOpen ? (
        <BiMenuAltLeft size="5em" color="#F0A202" className="ham-icon" onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <AiOutlineClose size="3em" color="#EE6352" className="ham-icon" onClick={() => setIsOpen(!isOpen)} />
      )}
      <nav className="nav">
        {navData.map((item) => {
          return (
            <NavLink key={item.id} to={item.to} className={item.className} onClick={(e) => handleClick(e)}>
              <span name={item.num} className="num">
                {item.num}
              </span>
              <span name={item.name} className="name">
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </nav>
      {isOpen && <MobileNav handleClick={handleClick} setIsOpen={setIsOpen} />}
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; 

  .nav {

    font-family: ${(pr) => pr.theme.fonts.secondary};
    font-size: ${(pr) => pr.theme.fontSizes.tiny};
    font-weight: ${(pr) => pr.theme.fontWeights.normal};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 0;
  }

  .nav-link {
    align-items: center;
    padding: 0 1rem;
  }

  .num {
    margin-right: 1rem;
    color: ${(pr) => pr.theme.colors.primary};
  }

  .name {
    font-weight: ${(pr) => pr.theme.fontWeights.normal};
  }

  .nav a {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
  }
  .nav a:hover {
    color: ${(pr)=> pr.theme.colors.secondary};
}

.ham-icon {
  display: none;
}

@media (max-width: 670px) {
  .ham-icon {
    display: flex;
  }

  .nav {
    display: none;
  }
}
`;
