import React from 'react'
import './form1.css'
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Form1() {
  return (
    <div>
        <div>
            <div className='form1-head'>
                <div className='form1-head-data'>
                        <div className='head-icon'>
                            <div className='setting-icon'>
                                <SettingsIcon className='icon'/>

                            </div>
                        <div><p className='head-data-para'>Center&nbsp;Settings</p></div>
                        </div>
                        <div>
                            <ArrowCircleDownIcon  className='head-data-arrow' />
                        </div>
                </div>
                <div>
                    <form className='form-head'>
                        <p className='form-para'>Phone Number</p>
                        <input type="text" placeholder='123456789' className='form-head-input' />
                        <p className='form-para'>Time zone</p>
                        <select name="timezone">
                            {/* <option value="timezone1">Time  1</option>
                            <option value="timezone2">Time Zone 2</option>
                            <option value="timezone3">Time Zone 3</option> */}
                        </select>
                        <p className='form-para'>Auto send reports</p>
                        <select name="Auto send reports" >
                            {/* <option value=""></option>
                            <option value=""></option>
                            <option value=""></option> */}
                        </select><br />
                        <small><b>Strongly Recommended.</b>Set an automated back-up for your daily reports. Any open reports will be sent to your center at this time and all corresponding children and staff will be signed out. The system won't send duplicates for reports that have already been sent.</small>
                        <hr />
                        <h4>PARENT SIGN IN & PICK UP</h4>

                        <div className='form-secTwo'>
                            <div className='div-one'>
                                <h5>Parent Sign-in Identification</h5>
                                <div>
                                    <input type="radio" />
                                    <span>No Identification Collected</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span>Name/Initials (Typed)</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span>Electronic Signature</span>
                                </div>
                            </div>
                            <div className='div-two'>
                                <h5>Child Name Display</h5>
                                <div>
                                    <input type="radio" />
                                    <span>First Name and Full Last Name (e.g., "Jane Doe")</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span>First Name and Last Initial (e.g., "Jane D.")</span>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className='form-secThree'>

                            <h4>Parents can sign child in via app</h4>
                            <input type="checkbox" />
                            <span>If checked, parents will have the ability to sign children in from within the HiMama mobile app at the beginning of the day. If left unchecked, parents will not have this option.<span className='form-secThree-highlight'>Parents must have downloaded and logged into the mobile app on their device.</span></span>


                            <h4>Safe Pickup</h4>
                            <input type="checkbox" />
                            <span>If checked, parents will have the ability to mark children as ready for pick up from within the HiMama mobile app at the end of the day. If left unchecked, parents will not have this option.<span className='form-secThree-highlight'>Parents must have downloaded and logged into the mobile app on their device. </span>For more info on this feature read our <span className='form-secThree-highlight2'>Help Center article.</span></span>


                            <h4>Classroom access</h4>
                            <input type="checkbox" />
                            <span>if checked, teachers can access all classrooms. If unchecked, a teacher will only have access to their homeroom; as a result, temporarily moving children must be performed by an administrator. Default is checked.</span>

                            <h4>Parents can mark child absent in app</h4>
                            <input type="checkbox" />
                            <span>if checked, parents will have the ability to mark their children absent from within the HiMama mobile app at the beginning of the day. If left unchecked, parents will not have this option and the center will be fully responsible for marking absent. <span className='form-secThree-highlight'>Please note, teachers will still be able to mark children absent even if this feature is enabled. Parents must have downloaded and logged into the mobile app on their device.</span></span>

                            <h4>Teacher editable time cards?</h4>
                            <input type="checkbox" />
                            <span>Check this off if you want to allow teachers to edit their own time cards. Otherwise, time cards must be edited by an administrator.</span>

                            <h4>Is a full week center?</h4>
                            <input type="checkbox" />
                            <span>Check this off if your center runs 7 days a week. This will expand the Activity Planner to include Saturday & Sunday. Otherwise, it will default to the standard Monday-Friday work week.</span>

                            
                        </div>
                        <button>Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form1