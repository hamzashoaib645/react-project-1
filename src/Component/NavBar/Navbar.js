import React from 'react'
import Profile from '../../assets/img/profile.png'
import '../NavBar/navbar.css'

function Navbar() {
  return (
    <>
      <div className='Navbar-contant'>
        <h2>Wednesday, Apr 6</h2>
        <div className='img'>
          <img src={Profile} />
        </div>
      </div>
    </>
  )
}

export default Navbar
