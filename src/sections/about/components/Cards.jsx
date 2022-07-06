/* eslint-disable no-unused-vars */
import React from 'react'

import '../scss/cards.scss'


function Cards({ info }) {







    return (
      <div className = 'card-container'>
        <div className="container">
            <div className={`box ${info.className}`}>
                  <div className="content">
                      <h2>{info.title}</h2>
                      <p>{info.text}</p>
                  </div>
            </div>
        </div>
      </div>
    )
}

export default Cards







