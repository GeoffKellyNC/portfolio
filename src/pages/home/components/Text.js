import React from 'react'
import { homeText } from '../data/homeData'

import TextStyled from '../styles/TextStyled'


function Text() {
  return (
    <TextStyled className = 'text'>
        <div className = 'desc-container'>
            {
                homeText.map((data,index) =>{
                    return(
                        <>
                            <h2 className = 'home-name'>{data.name}</h2>
                            <h1 key = {index} className = 'tag-line'>{data.tagLine}</h1>
                            <p key = 'desc' className = 'description'>{data.description}</p>
                        </>
                    )
                })
            }
        </div>
    </TextStyled>
  )
}

export default Text