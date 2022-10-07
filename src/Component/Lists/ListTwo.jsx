import React from 'react'
import './ListTwo.css'
import UserListImg from '../../../src/assets/img/Card-img.jpg'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

function ListTwo() {
  return (
    <>
      <div className='listTwo'>
        <div className='listTwo-one'>
          <img src={UserListImg} alt='' />
          <p>Sam Teacher</p>
        </div>
        <div className='listTwo-two'>
          <p>Not Present</p>
        </div>
        <div className='listTwo-three'>
          <button className='listTwoBtn-one'>
            <PowerSettingsNewIcon className='power-icon' />
            <p>Check In</p>
          </button>
          <button className='listTwoBtn-two'>
            <CalendarMonthIcon  className='month-icon'/>
            <ArrowDropDownIcon  className='month-icon'/>
          </button>
        </div>
      </div>
    </>
  )
}

export default ListTwo
