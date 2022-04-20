import React from 'react'
import styled from 'styled-components'

function CardInfo({cardID, cardInfo, setIsOpen}) {
    





    const selectedCard = cardInfo.find(card => card.id === cardID)

    console.log(selectedCard)

    return (
    <StyledCardInfo>
      <div className = {`card-info-container ${selectedCard.title}`} >
        <div> {selectedCard.moreInfo.text} </div>
        <button onClick = {() =>setIsOpen(false)}>Close</button>
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
          color: red;
        }

        .Interests {
          background: linear-gradient(315deg, #4dff03, #00d0ff);
        }

            




`