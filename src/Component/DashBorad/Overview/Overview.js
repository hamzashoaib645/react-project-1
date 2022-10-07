import React from 'react'
import './Overview.css'
import { Link } from 'react-router-dom'

import SingleRow from '../CardSinglerRow/SingleRow'

import { Button } from '@mui/material'

function Overview() {
  return (
    <div className='Row-container'>
      <SingleRow
        cardRowTitle='Classroom3'
        Class='red cardbox'
        ActivityRowText='3'
      />
      <SingleRow
        cardRowTitle='Active Childern3'
        Class='blue cardbox'
        ActivityRowText='3'
      />
      <SingleRow
        cardRowTitle='Childern per Class'
        Class='dark cardbox'
        ActivityRowText='1.0'
      />
      <SingleRow
        cardRowTitle='Parents per Child'
        Class='yellow cardbox'
        ActivityRowText='0/3'
      />
      <Button className='add-btn red'>
        <Link className='white' to='Childform'>Add&nbsp;Child</Link>
      </Button>
    </div>
  )
}

export default Overview
