import React from 'react'

function CardInfo({cardID, cardInfo, setIsOpen}) {
    





    const selectedCard = cardInfo.find(card => card.id === cardID)

    console.log(selectedCard)

    return (
    <div>
        <div> {selectedCard.moreInfo.text} </div>
        <button onClick = {() =>setIsOpen(false)}>Close</button>
    </div>
  )
}

export default CardInfo