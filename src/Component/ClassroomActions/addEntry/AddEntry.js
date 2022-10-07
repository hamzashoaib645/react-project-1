import React from 'react'
import './addentry.css'
function AddEntry({ imgsrc, imgtitle }) {
  return (
    <div className='Add-entry-container'>
      <div className='Entery'>
        <div>
          <div className='Sub_icon'>{imgsrc} </div>
          
          <div className='entery-info'>
            <small className='entery-info'>{imgtitle} </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEntry
