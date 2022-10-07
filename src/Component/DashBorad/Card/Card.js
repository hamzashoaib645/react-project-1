import React from 'react'

import './Card.css'

function Card(props) {
  return (
    <>
      <div>
        <div className='Card-header'>
          <h2>{props.headTitle}</h2>
          <span>{props.headIcon}</span>
        </div>
        <div className='cardbody'>{props.cardbody}</div>
      </div>
    </>
  )
}

export default Card
