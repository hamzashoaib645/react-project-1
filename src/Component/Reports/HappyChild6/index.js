import React from 'react'
import './happychild6.css'

import Container from '@mui/material/Container'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

const HappyChild6 = () => {
  return (
    <React.Fragment>
        <Container maxWidth='x-lg'>
            {/* code of header */}

            <div className='happychild6-head'>
                <div className='happychild6-heading'>
                    <h2>Name to Face</h2>
                </div>
                <div className='happychild6-btn'>
                    <label>Highlight</label>
                    <input type='checkbox' /> <span>Unscheduled hours</span>
                    <input type='checkbox' /> <span>Absences</span>
                    <input type='checkbox' /> <span>Room transitions</span>
                    <Button variant='contained'> Actions <i> <ExpandMoreIcon /> </i> </Button>
                </div>
            </div>
            <div className='happychild6-main'>
                <div className='happychild6-select'>
                    <div>
                        <label>Classroom</label> <br/>
                        <select>
                            <option>March 28, 2022</option>
                            <option>April 28, 2022</option>
                            <option>june 28, 2022</option>
                        </select>
                    </div>
                    <div>
                        <label>Date</label> <br/>
                        <select>
                            <option>April 1, 2022</option>
                            <option>March 28, 2022</option>
                            <option>june 28, 2022</option>
                        </select>
                    </div>
                </div>
                <div className='happychild6-icons'>
                    <i>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0.209864L14 2.18358C14 2.31779 13.9342 2.44411 13.8263 2.52306L3.52088 9.9995L13.8263 17.4759C13.9342 17.5549 14 17.6812 14 17.8154L14 19.7891C14 19.9602 13.8053 20.0602 13.6658 19.9602L0.873473 10.6811C0.410307 10.3442 0.410307 9.65476 0.873473 9.32054L13.6658 0.041439C13.8053 -0.0611935 14 0.0388088 14 0.209864Z" fill="white"/>
                        </svg>                    
                    </i>
                    <i className='arrow-icon'>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-8.65054e-07 0.209864L-7.7878e-07 2.18358C-7.72914e-07 2.31779 0.0657899 2.44411 0.173686 2.52306L10.4791 9.9995L0.173687 17.4759C0.0657906 17.5549 -1.01358e-07 17.6812 -9.5491e-08 17.8154L-9.21712e-09 19.7891C-1.74005e-09 19.9602 0.19474 20.0602 0.334216 19.9602L13.1265 10.6811C13.5897 10.3442 13.5897 9.65476 13.1265 9.32054L0.334215 0.041439C0.194739 -0.0611935 -8.72531e-07 0.0388088 -8.65054e-07 0.209864Z" fill="white"/>
                        </svg>
                    </i>
                </div>
            </div>
            <table className='happychild6-table'>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Classroom</th>
                        <th>Marked Present</th>
                        <th>Notes</th>
                    </tr>
                </thead>
            </table>
            <div className='happychild6-body'></div>

        </Container>
    </React.Fragment>
  )
}

export default HappyChild6