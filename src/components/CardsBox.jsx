import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import ResidentInfo from './ResidentInfo'
import Location from './Location'

const CardsBox = ({ planet }) => {

  return (
    <div id='cardsBox'>

      <section id='cardContainer'>
        <Location planet={planet} />
        {planet && planet.residents.map((resident, index) =>
          <ResidentInfo key={index} resident={resident} />)}
      </section>
    </div>
  )
}

export default CardsBox