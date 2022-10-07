import React from 'react'
import { Button } from '@mui/material'

import './staff1.css'
function Staffform() {
  return (
    <div className='stuff-container'>
      <div className='staff-form'>
        <h2 className='stuff-heading'>Child and Staff Profile Lookup</h2>
        <form className='staff-main'>
          <p>Enter the child's or staff's first and last name</p>
          <div className='staff-first'>
            <h4>First Name</h4>
            <input type='text' />
          </div>
          <div className='staff-last'>
            <h4>Last Name</h4>
            <input type='text' />
          </div>
          <div className='staff-btn'>
            <Button>Search</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Staffform
