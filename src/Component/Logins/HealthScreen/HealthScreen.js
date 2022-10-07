import React from 'react'
import { Button } from '@mui/material'

import './Health.css'
function HealthScreen() {
  return (
    <div className='health-container'>
      <div className='health-header'>
        <div className='health'>
          <svg
            className='health-icon'
            width='30'
            height='34'
            viewBox='0 0 30 34'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M30 26.4V24H27.4788C27.324 23.2488 27.0258 22.5346 26.6004 21.8964L28.3884 20.1084L26.6916 18.4116L24.9036 20.1996C24.2654 19.7742 23.5512 19.476 22.8 19.3212V16.8H20.4V19.3212C19.6488 19.476 18.9346 19.7742 18.2964 20.1996L16.5084 18.4116L14.8116 20.1084L16.5996 21.8964C16.1742 22.5346 15.876 23.2488 15.7212 24H13.2V26.4H15.7212C15.876 27.1512 16.1742 27.8654 16.5996 28.5036L14.8116 30.2916L16.5084 31.9884L18.2964 30.2004C18.9346 30.6258 19.6488 30.924 20.4 31.0788V33.6H22.8V31.0788C23.5512 30.924 24.2654 30.6258 24.9036 30.2004L26.6916 31.9884L28.3884 30.2916L26.6004 28.5036C27.0258 27.8654 27.324 27.1512 27.4788 26.4H30ZM21.6 28.8C20.888 28.8 20.192 28.5889 19.5999 28.1933C19.0079 27.7977 18.5465 27.2355 18.274 26.5777C18.0016 25.9198 17.9303 25.196 18.0692 24.4977C18.2081 23.7993 18.5509 23.1579 19.0544 22.6544C19.5579 22.1509 20.1993 21.8081 20.8977 21.6692C21.596 21.5303 22.3198 21.6016 22.9777 21.874C23.6355 22.1465 24.1977 22.6079 24.5933 23.1999C24.9889 23.792 25.2 24.488 25.2 25.2C25.199 26.1545 24.8195 27.0696 24.1445 27.7445C23.4696 28.4195 22.5545 28.799 21.6 28.8Z'
              fill='#FFFEFE'
            />
            <path
              d='M24 3.6H20.4V2.4C20.3981 1.76406 20.1446 1.15472 19.695 0.705042C19.2453 0.255366 18.6359 0.00189927 18 0H8.4C7.76406 0.00189927 7.15472 0.255366 6.70504 0.705042C6.25537 1.15472 6.0019 1.76406 6 2.4V3.6H2.4C1.76406 3.6019 1.15472 3.85537 0.705042 4.30504C0.255366 4.75472 0.00189927 5.36406 0 6V31.2C0.00189927 31.8359 0.255366 32.4453 0.705042 32.895C1.15472 33.3446 1.76406 33.5981 2.4 33.6H10.8V31.2H2.4V6H6V9.6H20.4V6H24V13.2H26.4V6C26.3981 5.36406 26.1446 4.75472 25.695 4.30504C25.2453 3.85537 24.6359 3.6019 24 3.6ZM18 7.2H8.4V2.4H18V7.2Z'
              fill='#FFFEFE'
            />
          </svg>
        </div>
        <div className='screening'>
          <h2>Health Screening</h2>
        </div>
      </div>
      <div className='enable-container'>
        <div className='enable-staff'>
          <input type='checkbox' />
          <h4>Enable staff administered screening</h4>
        </div>
        <div>
          <p>
            Allows children to be screened upon arrival at the center. Screening
            can be accessed through the classroom dashboard.
          </p>
        </div>
      </div>
      <div className='enable-container-2'>
        <div className='enable-staff'>
          <input type='checkbox' />
          <h4>Enable family administered screening</h4>
        </div>
        <div>
          <p>
            Allows children to be screened before arrival at the center.
            Screening can be accessed through a parent’s or guardian’s mobile
            device.
          </p>
        </div>
      </div>

      <div className='over'>
        <p>
          1. Has the child or anyone they've been in contact with tested
          positive for COVID-19 in the past 14 days? <br />
          2. Has the child recently exhibited the following symptoms:
          <br />
          Temperature above 100.4F
          <br />
          - Sore throat
          <br />
          - Cough
          <br />
          - Difficulty breathing
          <br />
          - Diarrhea or vomiting
          <br />
          - Loss of taste or smell
          <br />
          - New onset of fever or severe headache
          <br />
        </p>
        <p>
          1. Has the child or anyone they've been in contact with tested
          positive for COVID-19 in the past 14 days? <br />
          2. Has the child recently exhibited the following symptoms:
          <br />
          Temperature above 100.4F
          <br />
          - Sore throat
          <br />
          - Cough
          <br />
          - Difficulty breathing
          <br />
          - Diarrhea or vomiting
          <br />
          - Loss of taste or smell
          <br />
          - New onset of fever or severe headache
          <br />
        </p>
      </div>
      <div className='save'>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}

export default HealthScreen
