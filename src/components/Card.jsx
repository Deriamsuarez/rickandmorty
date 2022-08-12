import React from 'react'
import useFetch from '../hooks/useFetch'

const Card = ({ resident }) => {

  const alien = useFetch(resident)

console.log(alien)

  return (
    <div className="card Character">
      <div className="headerCard">
        <img src={alien?.image}/>
      </div>
      <div className="userInfo">
        <h3>{alien?.name}</h3>
        <span><div className="alive" /> <strong>{alien?.status}</strong></span>
        <span>origin</span>
        <span>{alien?.origin.name}</span>
        <span>Episodes where appear</span>
        <span>{alien?.episode.length}</span>
      </div>
    </div>
  )
}

export default Card