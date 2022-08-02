import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'

const CardsBox = ({ planet }) => {
  const [residentsUtilArray, setResidentsUtilArray] = useState()

  useEffect(() => {
    if (planet.residents) {

      let results = []
        for (let i = 0; i < planet.residents.length; i++) {
          const element = planet.residents[i];
          axios.get(element)
            .then(res => {
              results.push(res.data)
              setResidentsUtilArray(results)
            })
            .catch(err => console.log(err))
        }
    }
  }, [planet])

  return (
    <div id='cardsBox'>
      <section className='headerCards'>
        <div className="planetName">{planet?.name}</div>
        <ul>
          <li><span>type: </span><strong>{planet?.type}</strong></li>
          <li><span>dimension: </span><strong>{planet.dimension}</strong></li>
          <li><span>population: </span><strong>{planet.residents.length}</strong></li>
        </ul>
      </section>
      <section id='cardContainer'>

        {residentsUtilArray && residentsUtilArray.map((resident, index) =>
            <Card key={index} resident={resident} />)}
      </section>
    </div>
  )
}

export default CardsBox