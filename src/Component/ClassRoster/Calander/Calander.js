import React from 'react'
import './Calander.css'
import Table from '../Table/Table'

function Calander() {
  return (
    <>
        <div className='calander-main'>
            <div className='calander-main-heading'>
                <div className='calander-date'>
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17L1 9L9 1" stroke="#EA1F25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h3>April 2022</h3>
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 17L9 9L0.999999 1" stroke="#EA1F25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>


                </div>
                <div className='calander-weekly'>
                    <a href="#">
                        <p>View Weekly</p>
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 17L9 9L0.999999 1" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    
                </div>
            </div>

            <div className='calander-table'>
                <table>
                    <tr>
                        <thead>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tud</th>
                            <th>Wed</th>
                            <th>Thd</th>
                            <th>Fri</th>
                            <th>Sat</th>    
                        </thead>
                    </tr>
                    <tr>
                        <tbody>
                            <Table 
                                date="27"   
                            />
                            <Table 
                                date="28"   
                            />
                            <Table 
                                date="29"   
                            />
                            <Table 
                                date="30"   
                            />
                            <Table 
                                date="31"   
                            />
                            <Table 
                                date="1"   
                            />
                            <Table 
                                date="2"   
                            />
                            
                        </tbody>
                        
                    </tr>
                    <tr>
                        <tbody>
                            <Table 
                                date="3"   
                            />
                            <Table 
                                date="4"   
                            />
                            <Table 
                                date="5"   
                            />
                            <Table 
                                date="6"   
                            />
                            <Table 
                                date="7"   
                            />
                            <Table 
                                date="8"   
                            />
                            <Table 
                                date="9"   
                            />
                            
                        </tbody>
                        
                    </tr>
                    <tr>
                        <tbody>
                            <Table 
                                date="10"   
                            />
                            <Table 
                                date="11"   
                            />
                            <Table 
                                date="12"   
                            />
                            <Table 
                                date="13"   
                            />
                            <Table 
                                date="14"   
                            />
                            <Table 
                                date="15"   
                            />
                            <Table 
                                date="16"   
                            />
                            
                        </tbody>
                        
                    </tr>
                    <tr>
                        <tbody>
                            <Table 
                                date="17"   
                            />
                            <Table 
                                date="18"   
                            />
                            <Table 
                                date="19"   
                            />
                            <Table 
                                date="20"   
                            />
                            <Table 
                                date="21"   
                            />
                            <Table 
                                date="22"   
                            />
                            <Table 
                                date="23"   
                            />
                            
                        </tbody>
                        
                    </tr>
                    <tr>
                        <tbody>
                            <Table 
                                date="24"   
                            />
                            <Table 
                                date="25"   
                            />
                            <Table 
                                date="26"   
                            />
                            <Table 
                                date="27"   
                            />
                            <Table 
                                date="28"   
                            />
                            <Table 
                                date="29"   
                            />
                            <Table 
                                date="30"   
                            />
                            
                        </tbody>
                        
                    </tr>
                </table>
            </div>
        </div>
    </>
  )
}

export default Calander