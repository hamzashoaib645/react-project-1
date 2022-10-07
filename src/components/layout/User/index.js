import React from 'react'
import './user.css'

import Container from '@mui/material/Container'
import PersonIcon from '@mui/icons-material/Person';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Button from '@mui/material/Button'

const User = () => {
  return (
    <React.Fragment>
        <Container maxWidth='x-lg'>
            <div className='user-header'>
                <div className='user-setting'>
                    <i><PersonIcon/></i><span> User Settings</span>
                </div>
                <div className='circle-down'>
                    <i><ExpandCircleDownOutlinedIcon/></i>
                </div>
            </div>
            <form className='form-user'>
                <div className='user-heading'>
                    <h2>Profile</h2>
                </div>
                <label>Name</label> <br/>
                <input type='text'/> <br/>
                <label>Username</label>
                <p>Your username is your email address</p>
                <hr/>
                <div className='user-heading'>
                    <h2>Email Preferences</h2>
                </div>
                <label>Email Address</label> <br/>
                <input type='email' placeholder=''/> <br/>
                <label>Retype Email</label> <br/>
                <input type='email' placeholder=''/> <br/>
                <hr style={{marginTop:'30px', marginBottom:'30px'}}/>
                <div className='form-password'>
                <label>Password</label> <br/>
                    <a href='#'>change your password</a> <br/>
                    <Button variant='contained'>Save changes</Button>
                </div>
            </form>
        </Container>
    </React.Fragment>
  )
}

export default User