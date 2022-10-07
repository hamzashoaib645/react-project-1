import React from 'react'
import './form1.css'
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Form2() {
  return (
    <div>
        <div>
            <div className='form1-head'>
                <div className='form1-head-data'>
                        <div className='head-icon'>
                            <div className='setting-icon'>
                                <SettingsIcon className='icon'/>

                            </div>
                        <div><p className='head-data-para'>Classroom&nbsp;Settings</p></div>
                        </div>
                        <div>
                            <ArrowCircleDownIcon  className='head-data-arrow' />
                        </div>
                </div>
                <div>
                    <form className='form-head'>
                        <p className='form-para'>Classroom Name</p>
                        <input type="text" placeholder='001' className='form-head-input' />
                        <p className='form-para'>Age range</p>
                        <select name="timezone" placeholder='Infant'>
                            {/* <option value="timezone1">Time  1</option>
                            <option value="timezone2">Time Zone 2</option>
                            <option value="timezone3">Time Zone 3</option> */}
                        </select>
                        <p className='form-para'>Student-Staff Ratio (Optional)</p>
                        <input type="text" placeholder='Ex.3' className='form-head-input' /><br />
                        <small>Number of students for every 1 staff member</small>
                        <h4>PARENT SIGN IN & PICK UP</h4>

                        <input type="checkbox" />
                        <span>Real-time naps & meals</span>
                        

                        <hr />


                        <p className='form-para'>Classroom Name</p>
                        <input type="text" placeholder='001' className='form-head-input' />
                        <p className='form-para'>Age range</p>
                        <select name="timezone" placeholder='Infant'>
                            {/* <option value="timezone1">Time  1</option>
                            <option value="timezone2">Time Zone 2</option>
                            <option value="timezone3">Time Zone 3</option> */}
                        </select>
                        <p className='form-para'>Student-Staff Ratio (Optional)</p>
                        <input type="text" placeholder='Ex.3' className='form-head-input' /><br />
                        <small>Number of students for every 1 staff member</small>
                        <h4>PARENT SIGN IN & PICK UP</h4>

                        <input type="checkbox" />
                        <span>Real-time naps & meals</span>
                        

                        <hr />

                        <p className='form-para'>Classroom Name</p>
                        <input type="text" placeholder='001' className='form-head-input' />
                        <p className='form-para'>Age range</p>
                        <select name="timezone" placeholder='Infant'>
                            {/* <option value="timezone1">Time  1</option>
                            <option value="timezone2">Time Zone 2</option>
                            <option value="timezone3">Time Zone 3</option> */}
                        </select>
                        <p className='form-para'>Student-Staff Ratio (Optional)</p>
                        <input type="text" placeholder='Ex.3' className='form-head-input' /><br />
                        <small>Number of students for every 1 staff member</small>
                        <h4>PARENT SIGN IN & PICK UP</h4>

                        <input type="checkbox" />
                        <span>Real-time naps & meals</span>

                        <i><b>Note:</b>Passwords will stay the same. To update a password, visit the Logins section below.</i><br />
                        <button>Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form2