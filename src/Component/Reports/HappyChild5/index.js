import React from 'react'
import './happychild5.css'

import Container from '@mui/material/Container'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import QueryBuilderSharpIcon from '@mui/icons-material/QueryBuilderSharp'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp'
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp'
import { Button } from '@mui/material'

const HappyChild5 = () => {
  return (
    <React.Fragment>
      <Container maxWidth='x-lg'>
        {/* code of header */}

        <div className='happychild5-head'>
          <div className='happychild5-heading'>
            <h2>Weekly attendance</h2>
          </div>
          <div className='happychild5-btn'>
            <label>Highlight</label>
            <input type='checkbox' /> <span>Unscheduled hours</span>
            <input type='checkbox' /> <span>Absences</span>
            <input type='checkbox' /> <span>Room transitions</span>
            <input type='checkbox' /> <span>Staff</span>
            <Button variant='contained'>
              {' '}
              Actions{' '}
              <i>
                {' '}
                <ExpandMoreIcon />{' '}
              </i>{' '}
            </Button>
          </div>
        </div>
        <div className='happychild5-main'>
          <div className='happychild5-select'>
            <div>
              <label>Date</label> <br />
              <select>
                <option>March 28, 2022</option>
                <option>April 28, 2022</option>
                <option>june 28, 2022</option>
              </select>
            </div>
            <div>
              <label>Date Rang</label> <br />
              <select>
                <option>March 28, 2022</option>
                <option>March 28, 2022</option>
                <option>june 28, 2022</option>
              </select>
            </div>
            <div className='happychild5-select-last'>
              <label>To</label>
              <select>
                <option>April 1, 2022</option>
                <option>March 28, 2022</option>
                <option>june 28, 2022</option>
              </select>
            </div>
          </div>
          <div className='happychild5-icons'>
            <i>
              <svg
                width='14'
                height='20'
                viewBox='0 0 14 20'
                fill='none'
                className='
                        Arrowss'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14 0.209864L14 2.18358C14 2.31779 13.9342 2.44411 13.8263 2.52306L3.52088 9.9995L13.8263 17.4759C13.9342 17.5549 14 17.6812 14 17.8154L14 19.7891C14 19.9602 13.8053 20.0602 13.6658 19.9602L0.873473 10.6811C0.410307 10.3442 0.410307 9.65476 0.873473 9.32054L13.6658 0.041439C13.8053 -0.0611935 14 0.0388088 14 0.209864Z'
                  fill='white'
                />
              </svg>
            </i>
            <i className='happychild5-arrow-icon'>
              <svg
                width='14'
                height='20'
                viewBox='0 0 14 20'
                className='
                        Arrowss'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M-8.65054e-07 0.209864L-7.7878e-07 2.18358C-7.72914e-07 2.31779 0.0657899 2.44411 0.173686 2.52306L10.4791 9.9995L0.173687 17.4759C0.0657906 17.5549 -1.01358e-07 17.6812 -9.5491e-08 17.8154L-9.21712e-09 19.7891C-1.74005e-09 19.9602 0.19474 20.0602 0.334216 19.9602L13.1265 10.6811C13.5897 10.3442 13.5897 9.65476 13.1265 9.32054L0.334215 0.041439C0.194739 -0.0611935 -8.72531e-07 0.0388088 -8.65054e-07 0.209864Z'
                  fill='white'
                />
              </svg>
            </i>
          </div>
        </div>
        {/* code of table */}
        <table className='happychild5-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <p>Total</p>
                <i className='clock-last'>
                  <QueryBuilderSharpIcon />
                </i>
              </th>
              <th>
                <p>Mon (Mar 28)</p>
                <span>IN - OUT </span>{' '}
                <sub className='clock-last'>
                  <i>
                    <QueryBuilderSharpIcon />
                  </i>
                </sub>
              </th>
              <th>
                <p>Tue (Mar 28)</p>
                <span>IN - OUT </span>{' '}
                <sub>
                  <i className='clock-last'>
                    <QueryBuilderSharpIcon />
                  </i>
                </sub>
              </th>
              <th>
                <p>Wed (Mar 28)</p>
                <span>IN - OUT </span>{' '}
                <sub>
                  <i className='clock-last'>
                    <QueryBuilderSharpIcon />
                  </i>
                </sub>
              </th>
              <th>
                <p>Thu (Mar 28)</p>
                <span>IN - OUT </span>{' '}
                <sub>
                  <i className='clock-last'>
                    <QueryBuilderSharpIcon />
                  </i>
                </sub>
              </th>
              <th>
                <p>Fri (Mar 28)</p>
                <span>IN - OUT </span>{' '}
                <sub>
                  <i className='clock-last'>
                    <QueryBuilderSharpIcon />
                  </i>
                </sub>
              </th>
            </tr>
          </thead>

          {/* code of tbody */}
          <tbody>
            <tr className='first-row'>
              <td>John Doe</td>
              <td>0</td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
            </tr>
            <tr className='second-row'>
              <td>John Doe</td>
              <td>0</td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
            </tr>
            <tr className='second-row'>
              <td>John Doe</td>
              <td>0</td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
              <td>
                <i>
                  <AddCircleOutlineSharpIcon />
                </i>
              </td>
            </tr>
          </tbody>
        </table>

        {/* code of text */}
        <div className='happychild5-text'>
          <p>
            An asterisk (*) signifies the teacher was present that day, but was
            not scheduled.
          </p>
          <p>
            A dash (-) denotes the teacher was not present that day and was not
            scheduled.
          </p>
          <p>
            An "x" indicates the teacher is not scheduled to be present that
            day.
          </p>
          <p>
            An open door, , indicates the teacher was visiting another room.
          </p>
          <p>
            {' '}
            <b>Absence Types:</b> a: Appointment, h: Home day, n: No-show, o:
            Other, s: Sick, v: Vacation
          </p>
        </div>
        <div className='happychild5-btn'>
          <Button className='btn-end' variant='contained'>
            <i>
              <ArrowBackIosSharpIcon />{' '}
            </i>{' '}
            001 Enrollment
          </Button>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default HappyChild5
