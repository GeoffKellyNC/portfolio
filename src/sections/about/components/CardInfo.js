import React from 'react'
import styled from 'styled-components'

function CardInfo({cardID, cardInfo, setIsOpen}) {
    


  // useEffect(() => {

  //   let cardClass = document.querySelector('.card-info')
  //   const cl = cardClass.classList.value


  //   return cl.includes('About-card-info') ? cardClass.style.setProperty('top','-90em') :
  //   cl.classList.includes('Technology-card-info') ? cardClass.style.setProperty('top','-60em') :
  //   cl.classList.includes('Interests-card-info') ? cardClass.style.setProperty('top','-30em') : null

    

  // }, []) 

  


    const selectedCard = cardInfo.find(card => card.id === cardID)


    return (
    <StyledCardInfo className = {`${selectedCard.title}-card-info card-info`}>
      <div className = {`card-info-container ${selectedCard.title}`} >
        <div> {selectedCard.moreInfo.text} </div>
        <button onClick = {() =>{
          setIsOpen(false)
          }}>Close</button>
      </div>
    </StyledCardInfo>
  )
}

export default CardInfo



const StyledCardInfo = styled.div`
  margin: 0;
  padding: 0;

  .card-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20em;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    padding: 2em;
    position: relative;
  }


  .About {
    background: linear-gradient(315deg, #F0A20270, #fa1d1d70);
  }

  .Technology {
    background: linear-gradient(315deg, #03a9f470, #ff005870);
  }

  .Interests {
    background: linear-gradient(315deg, #4dff03, #00d0ff);
  }

  @media(max-width: 1140px){
    ${'' /* position: absolute;
    top: -90em;
    left: 0;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    padding: 2em;
    z-index: 1; */}

    .About {
      width: 100%;
      height: 40vh;    }

  }

  @media (max-width: 768px) {
    position: relative;
    z-index: 1;

    .card-info-container {
      width: 90%;
      height: auto;
      padding: 1em;
    }

    .About{
      background: linear-gradient(315deg, #F0A202, #fa1d1d);
    }

    .Technology {
      background: linear-gradient(315deg, #03a9f4, #ff0058);
    }

    .Interests {
      background: linear-gradient(315deg, #4dff03, #00d0ff);
    }
  }



            




`