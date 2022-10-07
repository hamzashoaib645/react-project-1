import React from 'react'
import './staflist.css'

import Container from '@mui/material/Container'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

const StafList = () => {
  return (
    <React.Fragment>
        <Container maxWidth='x-lg'>
            {/* code of header */}

            <div className='staff-list-head'>
                <div className='staff-list-heading'>
                    <h2>Staff Roster</h2>
                </div>
                <div className='staff-list-btn'>
                    <Button variant='contained'  >Weekly Reports <i> <ExpandMoreIcon /> </i></Button>
                    <Button variant='contained'  >Schedule Absences <i> <ExpandMoreIcon /> </i></Button>
                    <Button variant='contained' className='btn-end'>Add Child</Button>
                </div>
            </div>
            {/* code of table */}
            <table className='table' id='Table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Schedule</th>
                        <th>DOB</th>
                        <th>Classroom</th>
                        <th>Alerts</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {/* code of tbody */}
                <tbody>
                    <tr className='first-row'>
                        <td>John Doe</td>
                        <td> <span> M TU W TH F </span> SA SU </td>
                        <td>02/17/18</td>
                        <td>001</td>
                        <td></td>
                        <td><Button className='btn-end' variant='contained' >Actions <i> <ExpandMoreIcon /> </i> </Button></td>
                    </tr>
                    <tr className='second-row'>
                        <td>John Doe</td>
                        <td> <span> M TU W TH F </span> SA SU</td>
                        <td>02/17/18</td>
                        <td>001</td>
                        <td></td>
                        <td><Button className='btn-end' variant='contained' >Actions <i> <ExpandMoreIcon /> </i> </Button></td>
                    </tr>
                    <tr className='third-row'>
                        <td>John Doe</td>
                        <td> <span> M TU W TH F </span> SA SU</td>
                        <td>02/17/18</td>
                        <td>001</td>
                        <td></td>
                        <td><Button className='btn-end' variant='contained' >Actions  <i> <ExpandMoreIcon /> </i> </Button></td>
                    </tr>
                </tbody>
            </table>

            {/* code of upcoming */}
            <div className='list-up-coming'>
                <h2>Upcoming</h2>
            </div>
            <div className='list-text'>
                <p>No upcoming enrollments.</p>
            </div>
            <div className='list-up-coming'>
                <h2>Past</h2>
            </div>
            <div className='list-text'>
                <p>No recently graduated children.</p>
                <button type='button'>View All Graduated</button>
            </div>
            
        </Container>
    </React.Fragment>
  )
}

export default StafList