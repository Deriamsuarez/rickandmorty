import React from 'react'
import ResidentInfo from './ResidentInfo'
import Location from './Location'

const CardsBox = ({ planet, number }) => {

  return (
    <div id='cardsBox'>
      <section id='cardContainer'>
        <Location planet={planet} />
        {planet && planet.residents.map((resident) =>
          <ResidentInfo key={resident} resident={resident} number={number} />)}
      </section>
    </div>
  )
}

export default CardsBox