import React from 'react'
import { Button } from '@mui/material'


import "./Help.css"
function Help() {
  return (
    <div className='help'>
       <div className='help-container'>
        <div className='file-smile'>
            <div className='smile-para'>
                <h4 className='smiles'>Files and Smiles</h4>
                <h1>Help Center</h1>
            </div>
                <input type="text" />
                <div className='search-now'>
                    <Button>Search Now</Button>
                </div> 
        </div>
       </div>
    </div>
  )
}

export default Help