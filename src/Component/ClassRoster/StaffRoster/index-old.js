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
        console.log(res);
        setItems(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  // AXIOS-CODE

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   axios.get('http://3.142.228.212/api/allteacher')
  //     .then(res => {
  //       console.log(res);
  //       setItems(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, [])

  // return (
  //   <>
  //     <div>
  //       <ul>
  //         {
  //           items.map(item => (
  //             <li key={item.id}>
  //               {item.Name}
  //               {item.Email}
  //               {item.Phone}
  //               {item.Date_of_Birth}
  //             </li>
  //           ))
  //         }
  //       </ul>
  //     </div>
  //   </>
  // );


  // FETCH-API-CODE

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("http://3.142.228.212/api/allteacher")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {

  //   return (
  //     <div style={{ border: '1px solid red' }}>
  //       {items.map((item, index) => (
  //           <div key={index}>
  //             <h4>{item.Name}</h4>
  //             <h4>{item.Email}</h4>
  //             <h4>{item.Pone}</h4>
  //             <h4>{item.Date_of_Birth}</h4>
  //           </div>
  //       ))}
  //     </div>
  //   );

  // OLD-CODE

  return (
    <React.Fragment>
      <Container maxWidth='x-lg'>
        <div className='staff-list-head'>
          <div className='staff-list-heading'>
            <h2>Staff Roster</h2>
          </div>
          <div className='staff-list-btn'>
            <Button variant='contained'>
              Weekly Reports{' '}
              <i className='Roster-icon'>
                {' '}
                <ExpandMoreIcon className='moree-icon' />{' '}
              </i>{' '}
            </Button>
            <Link to='/Graph' className='Link'>
              <Button variant='contained'>
                Schedule Absences{' '}
                <i className='Roster-icon'>
                  {' '}
                  <ExpandMoreIcon />{' '}
                </i>{' '}
              </Button>
            </Link>
            <Link className='Link' to='/HappyChild5'>
              <Button
                variant='contained'
                className='btn-end

                '
              >
                {' '}
                <i className='wc-icon'>
                  {' '}
                  <WcIcon className='Roster-icon' />{' '}
                </i>{' '}
                Add Child{' '}
              </Button>
            </Link>
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
              <td>
                {' '}
                <span> M TU W TH F </span> SA SU{' '}
              </td>
              <td>02/17/18</td>
              <td>001</td>
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
            <tr className='second-row'>
              <td>John Doe</td>
              <td>
                {' '}
                <span> M TU W TH F </span> SA SU
              </td>
              <td>02/17/18</td>
              <td>002</td>
              <td></td>
              <td>
                <Button className='btn-end' variant='contained'>
                  Actions{' '}
                  <i>
                    {' '}
                    <ExpandMoreIcon className='moree-icon' />{' '}
                  </i>{' '}
                </Button>
              </td>
            </tr>
            <tr className='third-row'>
              <td>John Doe</td>
              <td>
                {' '}
                <span> M TU W TH F </span> SA SU
              </td>
              <td>02/17/18</td>
              <td>003</td>
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
          </tbody>
        </table>

        <br /> <br />

        <div className='staff-list-head'>
          <div className='staff-list-heading' style={{ margin: 'auto' }}>
            <h2>FETCH DATA THROUGH API</h2>
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
                <tr className='first-row' key={item.id}>
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
