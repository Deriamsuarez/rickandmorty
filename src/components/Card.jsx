import React from 'react'

const Card = ({ resident }) => {

  return (
    <div className="card Character">
      <div className="headerCard">
        <img src={resident.image}/>
      </div>
      <div className="userInfo">
        <h3>{resident.name}</h3>
        <span><div className="alive" /> <strong>{resident.status}</strong></span>
        <span>origin</span>
        <span>{resident.origin.name}</span>
        <span>Episodes where appear</span>
        <span>{resident.episode.length}</span>
      </div>
    </div>
  )
}

export default Card