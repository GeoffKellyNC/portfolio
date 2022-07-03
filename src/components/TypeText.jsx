import React from 'react'
import Typewriter from 'typewriter-effect';
import styled from 'styled-components'





const TypeText = () => {




  return (
    <TypewriterStyled className='typedText'>
      <Typewriter
          options={{
            cursor: '|',
            wrapperClassName: 'typewriter-wrapper',
            cursorClassName: 'typewriter-cursor',
            delay: 50,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('Geoff Kelly')
            .start()
          }}
        />
        <Typewriter 
          options={{
            cursor: '|',
            wrapperClassName: 'typewriter-wrapper-loop',
            cursorClassName: 'typewriter-cursor-loop',
            delay: 50,
            strings: ['Web Developer', 'Web Designer', 'Web Enthusiast'],
            loop: true,
            autoStart: true,
          }}
        />
    </TypewriterStyled>
  )
}

export default TypeText

const TypewriterStyled = styled.div`
  .typewriter-wrapper {
    font-size: 1.5em;
    font-family: ${pr => pr.theme.fonts.primary};
    color: ${pr => pr.theme.colors.primary};
  }

  .typewriter-cursor {
    color: ${pr => pr.theme.colors.primary};
    font-size: 1.5em;
  }

`