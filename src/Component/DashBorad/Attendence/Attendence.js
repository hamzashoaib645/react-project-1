import React from 'react'
import './Attendence.css'
import { Link } from 'react-router-dom'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { Button } from '@mui/material'

import AttendenceList from '../AttendenceList/AttendenceList'

function Attendence() {
  return (
    <div className='Attdence-container'>
      <div className='Attendence-header'>
        <h2>Attendence</h2>
        <CalendarTodayIcon />
      </div>
      <div className='AttdenceBody'>
        <AttendenceList />
        <div className='AttdenceCilcle-container'>
          <div className='AttdenceCilcle'>
            <h2>03</h2>
            <h3>scheduled</h3>
          </div>
        </div>
        <div className='Attdencebtn'>
          <Link to='/StaffManagement' className='Link'>
            <Button className='add-btn red'>List</Button>
          </Link>
          <Link to='/Staffform' className='Link'>
            <Button className='add-btn blue'>
              <SearchRoundedIcon /> Search
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Attendence
