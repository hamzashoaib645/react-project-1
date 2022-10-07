import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <>
      <div>
        <div className='card'>
          <div className='card-setting'>{props.settingIcon}</div>
          <div className='card-arrow-head'>
            <div className='card-arrow'>
              <h2>{props.CardHeading}</h2>
              <a href={props.link}>{props.icon}</a>
            </div>
            <div className='card-list1'>
              <p>{props.l1}</p>
              <p>{props.l2}</p>
              <p>{props.l3}</p>
              <p>{props.l4}</p>
              <p>{props.l5}</p>
              <p>{props.l6}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
