import React from 'react'
import './ListHead.css'

function ListHead() {
  return (
    <>
      <div className='list-head'>
        <div className='list-head-one'>
          <h2>Staff</h2>
          <p>Ratio&nbsp;n/a</p>
        </div>
        <div className='list-head-two'>
          <button>Hide&nbsp;Staff</button>
        </div>
      </div>
    </>
  )
}

export default ListHead
