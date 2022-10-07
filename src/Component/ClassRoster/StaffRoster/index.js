import React, { useState, useEffect } from 'react'
import './staffroster.css'
import { Link } from 'react-router-dom'

import Container from '@mui/material/Container'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import WcIcon from '@mui/icons-material/Wc'
import { Button } from '@mui/material'
import axios from 'axios'

const StafRoster = () => {

  // AXIOS-CODE

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://3.142.228.212/api/allteacher')
      .then(res => {
        setItems(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth='x-lg'>
        <div className='staff-list-head'>
          <div className='staff-list-heading' style={{ margin: 'auto' }}>
            <h2 style={{color:'red'}}>FETCH DATA THROUGH API</h2>
          </div>
        </div>

        {/* API-DATA-TABLE */}

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

          <tbody>
            {
              items.map(item => (
                <tr key={item.id}>
                  <td>{item.Name}</td>
                  <td>
                  {item.Email}
                  </td>
                  <td>{item.Date_of_Birth}</td>
                  <td>{item.Phone}</td>
                  <td></td>
                  <td>
                    <Button className='btn-end' variant='contained'>
                      Actions{' '}
                      <i>
                        {' '}
                        <ExpandMoreIcon />{' '}
                      </i>{' '}
                    </Button>
                  </td>
                </tr>
              ))
            }
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
          <h2>Graduated</h2>
        </div>
        <div className='list-text'>
          <p>No recently graduated children.</p>
          <Link to='/HappyChild5'>
            <button type='button'>View All Graduated</button>
          </Link>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default StafRoster
