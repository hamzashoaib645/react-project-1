import * as React from 'react'

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './ClassRoomReports.css'

import { Link } from "react-router-dom"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { Button } from "@mui/material"

function ClassRoomReports() {
  return (
    <div className='classroom-reports'>
      <h3>Classroom Reports</h3>
      <div className='accordion'>
        <div className='accordion-1'>
          <Link to="/HappyChild5" className='Link'>
            <Button className='red'>Weekly Attendance <ArrowBackIosNewIcon  className='Arrow'/></Button> 
          </Link>
          <p>Weekly report of each child’s and staff’s check in/out times, absences and room transitions.</p>
        </div>
        <div className='accordion-1'>
          <Link to="/HappyChild6" className='Link'>
            <Button className='red'>Name to Face <ArrowBackIosNewIcon  className='Arrow'/></Button>
          </Link>
          <p>Daily name to face entry report including time of check, head count and notes.</p>
        </div>
      </div>
      <div className='accordion'>
        <div className='accordion-1'>
          <Link to="/Health" className='Link'>
            <Button className='red'>Health <ArrowBackIosNewIcon  className='Arrow'/></Button>
          </Link>
          <p>Weekly health entry report including each child's health status and notes.</p>
        </div>
        <div className='accordion-1 margin'>
          <Link to="/HappyChild7" className='Link'>
            <Button className='red'>Sleep Check <ArrowBackIosNewIcon  className='Arrow'/></Button>
          </Link>
          <p>Weekly sleep entry report including each  child's sleep check time and notes.</p>
        </div>
      </div>
    </div>
  )
}

export default ClassRoomReports
