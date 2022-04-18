import React from 'react'

function CardInfo({cardID, cardInfo}) {
    





    const selectedCard = cardInfo.find(card => card.id === cardID)

    console.log(selectedCard)

    return (
    <div>{selectedCard.moreInfo.text}</div>
  )
}

export default CardInfo