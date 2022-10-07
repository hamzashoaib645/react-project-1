import React from 'react'
import { Button } from '@mui/material'

import './Viral.css'
function Viral() {
  return (
    <div className='feature-container'>
      <div className='add-main'>
        <div className='add'>
          <svg
            width='35'
            height='44'
            viewBox='0 0 35 44'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.0782 42.934C16.445 43.1959 16.8843 43.3367 17.335 43.3367C17.7856 43.3367 18.225 43.1959 18.5918 42.934C19.2505 42.4681 34.7326 31.2893 34.6698 17.3348C34.6698 7.77683 26.893 0 17.335 0C7.77702 0 0.000190765 7.77683 0.000190765 17.324C-0.0626479 31.2893 15.4195 42.4681 16.0782 42.934ZM17.335 4.3337C24.5051 4.3337 30.3361 10.1647 30.3361 17.3456C30.3816 26.9621 20.828 35.597 17.335 38.4291C13.8442 35.5949 4.28839 26.9578 4.33389 17.3348C4.33389 10.1647 10.1649 4.3337 17.335 4.3337Z'
              fill='white'
            />
            <path
              d='M17.3354 30.0008C22.1154 30.0008 26.0028 26.1135 26.0028 21.3334C26.0028 16.5533 22.1154 12.666 17.3354 12.666C12.5553 12.666 8.66797 16.5533 8.66797 21.3334C8.66797 26.1135 12.5553 30.0008 17.3354 30.0008ZM17.3354 16.9997C19.7254 16.9997 21.6691 18.9434 21.6691 21.3334C21.6691 23.7235 19.7254 25.6671 17.3354 25.6671C14.9453 25.6671 13.0017 23.7235 13.0017 21.3334C13.0017 18.9434 14.9453 16.9997 17.3354 16.9997Z'
              fill='white'
            />
          </svg>
        </div>
        <div className='last'>
          <div className='feature-main'>
            <h2>Virtual Areas</h2>
          </div>
          <div>
            <a href='#'>
              <svg
                className='icon-arrow'
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M26.5 14C26.5 7.09644 20.9036 1.5 14 1.5C7.09644 1.5 1.5 7.09644 1.5 14C1.5 20.9036 7.09644 26.5 14 26.5C20.9036 26.5 26.5 20.9036 26.5 14Z'
                  stroke='#00AEEF'
                  stroke-width='2'
                />
                <path
                  d='M11.125 19L16.125 14L11.125 9'
                  stroke='#00AEEF'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='virtual-para'>
        <p>
          Create virtual areas where your teachers can move children.Movement
          to/from these areas will be logged in your attendance reports and can
          be <br /> used for "name to face" recording.Create as manyvirtual
          areas as needed by your center.Note: These areas are for tracking
          purposes and aren't <br />
          the same as classrooms - Updates will still be done from the home
          classroom.
          <a className='more' href='#'>
            READ MORE
          </a>
        </p>
        <div className='confingure'>
          <h2>Configure Areas</h2>
          <a className='add-area' href='#'>
            Add a virtual area{' '}
          </a>
          <div className='save-btn'>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viral
