import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.div`
    .wrapper{
        width: fit-content;
    }
    button{
        width:9em;
        height:2.5em;
        background: linear-gradient(to left top, #054CAE 50%, #0347a0 50%);
        border-style: none;
        color:#fff;
        font-size: 23px;
        letter-spacing: 3px;
        font-family: 'Poppins';
        font-weight: 600;
        outline: none;
        cursor: pointer;
        position: relative;
        padding: 0px;
        overflow: hidden;
        transition: all .5s;
        box-shadow: 0px 1px 2px rgba(0,0,0,.2);
        border-radius: 10px;
    }
    button span{
        position: absolute;
        display: block;
    }
    button span:nth-child(1){
        height: 3px;
        width:200px;
        top:0px;
        left:-200px;
        background: linear-gradient(to right, rgba(0,0,0,0), #f0a202);
        border-top-right-radius: 1px;
        border-bottom-right-radius: 1px;
        animation: span1 2s linear infinite;
        animation-delay: 1s;
    }

    @keyframes span1{
        0%{
            left:-200px
        }
        100%{
            left:200px;
        }
    }
    button span:nth-child(2){
        height: 70px;
        width: 3px;
        top:-70px;
        right:0px;
        background: linear-gradient(to bottom, rgba(0,0,0,0), #f0a202);
        border-bottom-left-radius: 1px;
        border-bottom-right-radius: 1px;
        animation: span2 2s linear infinite;
        animation-delay: 2s;
    }
    @keyframes span2{
        0%{
            top:-70px;
        }
        100%{
            top:70px;
        }
    }
    button span:nth-child(3){
        height:3px;
        width:200px;
        right:-200px;
        bottom: 0px;
        background: linear-gradient(to left, rgba(0,0,0,0), #f0a202);
        border-top-left-radius: 1px;
        border-bottom-left-radius: 1px;
        animation: span3 2s linear infinite;
        animation-delay: 3s;
    }
    @keyframes span3{
        0%{
            right:-200px;
        }
        100%{
            right: 200px;
        }
    }

    button span:nth-child(4){
        height:70px;
        width:3px;
        bottom:-70px;
        left:0px;
        background: linear-gradient(to top, rgba(0,0,0,0), #f6e58d);
        border-top-right-radius: 1px;
        border-top-left-radius: 1px;
        animation: span4 2s linear infinite;
        animation-delay: 4s;
    }
    @keyframes span4{
        0%{
            bottom: -70px;
        }
        100%{
            bottom:70px;
        }
    }

    button:hover{
        transition: all .5s;
        transform: rotate(-4deg) scale(1.2);
        box-shadow: 0px 10px 14px rgba(241,162,0,.4);
        color: ${pr => pr.theme.Yellow}

    }
    button:hover span{
        animation-play-state: paused;
    }




`

function ContactButton() {
  return (
    <StyledButton>
        <div class="wrapper">
            <button>
                Contact Me! 
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
         </div>

    </StyledButton>
  )
}

export default ContactButton