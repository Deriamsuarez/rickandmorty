import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import Card from './Card'
import Location from './Location'

const CardsBox = ({ planet, residents }) => {
  const [residentsUtilArray, setResidentsUtilArray] = useState()
console.log(residents)





  // if (residents) {  const resident = useFetch(residents)
  //   console.log(resident)
  // }


  // useEffect(() => {
    //   if (planet.residents) {

    //     let results = []
    //     for (let i = 0; i < planet.residents.length; i++) {
    //       const element = planet.residents[i];
    //       axios.get(element)
    //         .then(res => {
    //           results.push(res.data)
    //           setResidentsUtilArray(results)
    //         })
    //         .catch(err => console.log(err))
    //     }
    //   }
  // }, [planet])

  return (
    <div id='cardsBox'>

      <section id='cardContainer'>
        <Location planet={planet} />
        {residents && residents.map((resident, index) =>
          <Card key={index} resident={resident} />)}
      </section>
    </div>
  )
}

export default CardsBox