import React from 'react'

const Location = ({planet}) => {

  return (
    <section className='headerCards'>
    <div className="planetName">{planet?.name}</div>
    <ul>
      <li><span>type: </span><strong>{planet?.type}</strong></li>
      <li><span>dimension: </span><strong>{planet.dimension}</strong></li>
      <li><span>population: </span><strong>{planet.residents.length}</strong></li>
    </ul>
  </section>
  )
}

export default Location