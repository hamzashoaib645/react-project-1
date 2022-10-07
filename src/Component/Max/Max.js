import React from 'react'
import { Button } from '@mui/material'

import './Max.css'
function Max() {
  return (
    <>
      <div className='AddOn-main1'>
        <div className='AddOn-main-head'>
          <div className='AddOn-icons-head'>
            <div className='AddOn-bell-icon'>
              <svg
                width='28'
                height='30'
                viewBox='0 0 28 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14 0C12.4617 0 10.9579 0.456159 9.6789 1.31079C8.39985 2.16542 7.40295 3.38015 6.81427 4.80135C6.22559 6.22255 6.07156 7.78641 6.37167 9.29515C6.67178 10.8039 7.41254 12.1898 8.50028 13.2775C9.58802 14.3652 10.9739 15.106 12.4826 15.4061C13.9914 15.7062 15.5552 15.5522 16.9764 14.9635C18.3976 14.3748 19.6124 13.3779 20.467 12.0989C21.3216 10.8198 21.7778 9.31608 21.7778 7.77778C21.7778 5.71498 20.9583 3.73667 19.4997 2.27806C18.0411 0.819442 16.0628 0 14 0ZM14 12.4444C13.077 12.4444 12.1748 12.1707 11.4073 11.658C10.6399 11.1452 10.0418 10.4164 9.68856 9.56363C9.33535 8.71091 9.24294 7.7726 9.423 6.86736C9.60307 5.96211 10.0475 5.13059 10.7002 4.47795C11.3528 3.8253 12.1843 3.38084 13.0896 3.20078C13.9948 3.02072 14.9331 3.11313 15.7859 3.46634C16.6386 3.81955 17.3674 4.41769 17.8802 5.18512C18.393 5.95255 18.6667 6.8548 18.6667 7.77778C18.6667 9.01545 18.175 10.2024 17.2998 11.0776C16.4247 11.9528 15.2377 12.4444 14 12.4444ZM28 29.5556V28C28 25.1121 26.8528 22.3425 24.8107 20.3004C22.7687 18.2583 19.999 17.1111 17.1111 17.1111H10.8889C8.00098 17.1111 5.23134 18.2583 3.18928 20.3004C1.14722 22.3425 0 25.1121 0 28V29.5556H3.11111V28C3.11111 25.9372 3.93055 23.9589 5.38917 22.5003C6.84779 21.0417 8.82609 20.2222 10.8889 20.2222H17.1111C19.1739 20.2222 21.1522 21.0417 22.6108 22.5003C24.0694 23.9589 24.8889 25.9372 24.8889 28V29.5556H28Z'
                  fill='white'
                />
              </svg>
            </div>
            <div className='AddOn-bell-text'>
              <h2> User Setting</h2>
            </div>
          </div>
          <div className='AddOn-head-arrow'>
            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.9976 1.65933C9.18283 0.55584 2.76379 5.18577 1.6603 12.0006C0.556812 18.8154 5.18674 25.2344 12.0015 26.3379C18.8163 27.4414 25.2354 22.8115 26.3389 15.9967C27.4424 9.18186 22.8124 2.76282 15.9976 1.65933Z'
                stroke='#00AEEF'
                stroke-width='2'
              />
              <path
                d='M9.00012 11.125L14.0001 16.125L19.0001 11.125'
                stroke='#00AEEF'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
        </div>
        <div className='profile'>
          <h2>Profile</h2>
          <h4>Name</h4>
          <input type='text' placeholder='Max Mallidius' />
          <div className='email'>
            <h4>Username</h4>
            <p>Your username is your email address.</p>
          </div>
          <hr />
        </div>
        <div className='profile'>
          <h2>Email Preferences</h2>
          <h4>Email Address</h4>
          <input type='text' placeholder='Max M@allidius' />
          <h4>Retype Email</h4>
          <input type='text' placeholder='Max M@allidius' />
          <hr />
        </div>
        <div className='password'>
          <h2>Password</h2>
          <a href='#'>Change your password </a>
          <div className='change-btn'>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Max
