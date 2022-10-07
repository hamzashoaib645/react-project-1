import React from 'react'
import "./HappyChild3.css"


import { Button } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function HappyChild3() {
  return (
    <div className='HappyChild2-container'>
        <div className="HappyChild2-header">
          <h2>Happy Children Daycare Allergies / Medical Notes Report</h2>
          <Button className="HC-btn2"><span>Report Actions</span> <ArrowBackIosIcon  className="Arrow-Down"/></Button>
        </div>
        <table>
   <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Classroom</th>
    <th>Age</th>
    <th>Date of Birth</th>
  </tr>
  <tr>
    <td>sam</td>
    <td>teacher</td>
    <td>001</td>
    <td>25th year 1 month  </td>
    <td>1997-09-15 </td>
  </tr>
  <tr>
    <td>sam</td>
    <td>teacher</td>
    <td>001</td>
    <td>25th year 1 month  </td>
    <td>1997-09-15 </td>
  </tr>
  <tr>
    <td>sam</td>
    <td>teacher</td>
    <td>001</td>
    <td>25th year 1 month  </td>
    <td>1997-09-15 </td>
  </tr>
  <tr>
    <td>sam</td>
    <td>teacher</td>
    <td>001</td>
    <td>25th year 1 month  </td>
    <td>1997-09-15 </td>
  </tr>
  <tr>
    <td>sam</td>
    <td>teacher</td>
    <td>001</td>
    <td>25th year 1 month  </td>
    <td>1997-09-15 </td>
  </tr>
  
</table>
    </div>
  )
}

export default HappyChild3;