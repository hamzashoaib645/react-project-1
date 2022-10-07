import React from 'react'
import './Contacts.css'
// import SearchIcon from '@mui/icons-material/Search';
import Child from '../../Assets/img/child.jpg'

function Contacts() {
  return (
    <>
        <div className='contact-main'>
            <div className='contact-heading'>
                <h3>Contacts</h3>
            </div>
            <div className='contact-searchBar'>
                <input type="text" placeholder='Search' className='contact-searchBar-input' />
                <div className='contact-checkbox-dropdown'>
                    <div className='contact-checkbox-btn'>
                        <input type="checkbox" />
                        <p>Only&nbsp;kids&nbsp;without&nbsp;contacts</p>
                    </div>
                    <div className='contact-dropdown-btn'>
                        <p>All classrooms</p>
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8321 0H14.2531C14.1458 0 14.0447 0.0526326 13.9816 0.13895L8.0004 8.3833L2.01925 0.13895C1.95609 0.0526326 1.85503 0 1.74766 0H0.168691C0.0318461 0 -0.0481552 0.155792 0.0318461 0.267373L7.45513 10.5012C7.72461 10.8718 8.27619 10.8718 8.54357 10.5012L15.9668 0.267373C16.049 0.155792 15.969 0 15.8321 0Z" fill="#9E9E9E"/>
                        </svg>

                    </div>
                </div>
            </div>
            <div className='contact-list-main'>
                <div className='contact-list-head'>
                    <p>Name</p>
                    <p>Contact1</p>
                    <p>Contact2</p>
                    <p></p>
                </div>
                <div className='contactList-main'>
                    <div className='contact-row'>
                        <div className='contact-img-text'>
                           <img src={Child} alt="" />
                           <p>Sam Doe</p>
                        </div>
                        <div className='contact-row-text'>
                            <p>No Contact Added</p>
                        </div>
                        <div>
                            <button className='contact-add-btn'>Add Contact</button>
                            <button className='contact-view-btn'>View/Edit</button>
                        </div>
                        
                    </div>
                    <div className='contact-row'>
                        <div className='contact-img-text'>
                           <img src={Child} alt="" />
                           <p>Sam Doe</p>
                        </div>
                        <div className='contact-row-text'>
                            <p>No Contact Added</p>
                        </div>
                        <div>
                            <button className='contact-add-btn'>Add Contact</button>
                            <button className='contact-view-btn'>View/Edit</button>
                        </div>
                        
                    </div>
                    <div className='contact-row'>
                        <div className='contact-img-text'>
                           <img src={Child} alt="" />
                           <p>Sam Doe</p>
                        </div>
                        <div className='contact-row-text'>
                            <p>No Contact Added</p>
                        </div>
                        <div>
                            <button className='contact-add-btn'>Add Contact</button>
                            <button className='contact-view-btn'>View/Edit</button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className='contact-footer'>
                <div className='contact-footer-text'>
                    <p>Showing 1 to 2 of 3 entries</p>
                </div>
                <div className='contact-footer-next-prev'>
                    <button className='contact-previous-btn'>Previous</button>
                    <button className='contact-next-btn'>Next</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contacts