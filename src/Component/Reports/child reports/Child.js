import React from 'react'
import ReportButton from './ReportButton'
import './Child.css'
import { Link } from 'react-router-dom'

function Child() {
  return (
    <>
      <div className='child-cont'>
        <h3>Child Reports</h3>
        <p>Get printable lists of information about children at your center.</p>
        <div className='r-buttons'>
          <div className='buttons-1 '>
            <Link to='/HappyChild'>
              {' '}
              <ReportButton name='Allergies / Medical Notes' />
            </Link>
          </div>
          <div className='buttons-2'>
            <Link to='/HappyChild2'>
              <ReportButton name='Contacts' />
            </Link>
          </div>
        </div>
        <div className='r-buttons2'>
          <div className='buttons-1'>
            <Link to='/HappyChild3'>
              {' '}
              <ReportButton name='Birthdays' />
            </Link>
          </div>
          <div className='buttons-2'>
            <Link to='/HappyChild4'>
              <ReportButton name='Immunization Records' />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Child
