import React, { useState } from 'react'

import '../scss/cards.scss'


function Cards({ info, handleCardClick }) {





  return (
    <div className = 'card-container'>
      <div className="container">
          <div className={`box ${info.className}`}>
              <span></span>
              <div className="content">
                  <h2>{info.title}</h2>
                  <p>{info.text}</p>
                  <button onClick = {() => handleCardClick(info.id)}>{info.button}</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Cards



