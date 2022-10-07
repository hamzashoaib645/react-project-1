import React from 'react'
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import "./Lookform.css"
function Lookform() {
  return (
    <div className='lookup-container'>
        <div className='lookup-main'>
        <div className='Child-lookup'> <h2>Child and Staff Profile Lookup</h2></div>
            <div>
                <div className='lookup-icon'>
                    <h3>Send to:</h3>
                    <div>
                        <input type="Radio" />
                        <p>Child</p>
                    </div>
                    <div>
                        <input type="Radio" />
                        <p>Classroom</p>
                    </div>
                    <div>
                        <input type="Radio" />
                        <p>Center</p>
                    </div>
                    <div>
                        <input type="Radio" />
                        <p>Age Group</p>
                    </div>
                    <div>
                        <input type="Radio" />
                        <p>Staff Member</p>
                    </div>
                    <div>
                        <input type="Radio" />
                        <p>All Staff</p>
                    </div>
                </div>
                <div className='teacher'>
                    <input type="checkbox" />
                    <p>Include teachers on thread?</p>
                </div>
                <div className='dropdown'>
                    <h2>Select Child</h2>
                    <select name="cars" id="cars">
                        <option value="volvo">Nothing selected</option>
                        <option value="saab"></option>
                        <option value="mercedes"></option>
                        <option value="audi"></option>
                    </select>
                </div>

            </div>
        </div>
        <div className='Send-via-container'>
            <div className='via'>
                <h2>Send via</h2>
                <input type="radio" />
                <h3>Email</h3>
                <input type="radio"/>
                <h3>SMS</h3>
            </div>
            <div className='subject'>
                <h3>Subject</h3>
                <input />
            </div>
            <div className='body-form'>
                <h3>Body</h3>
                <input />
            </div>
            <div className='btn-last'>
            <Button type='file'  variant="contained" style={{backgroundColor: '#5F5F5F'}} endIcon={<AttachFileIcon />}>
                Attach file
            </Button>
            </div>
            <select name="cars" id="car">
                <option value="volvo">Template Options</option>
                <option value="saab"></option>
                <option value="mercedes"></option>
                <option value="audi"></option>
            </select>
            <div className='send-btn'>
                <Button className='send'>Send</Button>
                <Button className='Schedule'>Schedule Send</Button>
            </div>   
        </div>
    </div>    
  )
}

export default Lookform