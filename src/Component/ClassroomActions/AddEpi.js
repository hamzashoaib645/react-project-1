import React from 'react';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import './card.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEpiComponent = () => {
  return (
    <div className='Child-form'>
      <div className='Child-form-header'>
        <h2>Add EPI</h2>
      </div>

      <React.Fragment>
        <Container maxWidth='x-lg'>
          <form className='form'>
            <label>Enter Epi pen</label> <br />
            <input type='text' placeholder='xxxxxxxxxxxxxxxxxxxxx' className='inputs' /> <br />

            <label>Serial</label> <br />
            <input type='number' placeholder='123456' className='inputs' /> <br />

            <label>Brand </label> <br />
            <select name="Brand" className='inputs'>
              <option value="brand 1">brand 1</option>
              <option value="brand 2">brand 2</option>
              <option value="brand 3">brand 3</option>
            </select> <br />

            <label>Quantity </label> <br />
            <select name="quantity" className='inputs'>
              <option value="quantity 1"> 1</option>
              <option value="quantity 2"> 2</option>
              <option value="quantity 3"> 3</option>
            </select> 

            <div className='btn-end1'>
              <Button type='submit' variant='contained'>Submit</Button>
            </div>
          </form>
        </Container>
      </React.Fragment>
    </div>
  )
}

export default AddEpiComponent