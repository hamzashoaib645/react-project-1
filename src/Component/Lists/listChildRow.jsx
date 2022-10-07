import React from 'react'
import './listChildRow.css'
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

function ListChildRow() {
  return (
    <>
        <div className='list-row'>
            <h2>Children</h2>
            <div className='circles'>
                <div className='greenCircle'>
                  <input type="radio"  className='circle-green'/>
                  <p>o</p>
                </div>
                <div>
                    <input type="radio"  className='circle-grey'/>
                    <p>o</p>
                </div>
                <div>
                    <input type="radio"  className='circle-trans'/>
                    <p>o</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ListChildRow