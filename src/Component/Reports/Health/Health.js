import React from 'react'
import './Health.css'

import Container from '@mui/material/Container'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button'

function Health() {
  return (
    <>
        <Container maxWidth='x-lg'>
            <div className='health-head'>
                <div className='health-heading'>
                    <h2>Health</h2>
                </div>
                <div className='health-btn'>
                    <Button variant='contained'> Actions <i> <ExpandMoreIcon /> </i> </Button>
                </div>
            </div>
            <div className='health-main'>
                <div className='health-select'>
                    <div>
                        <label>Classroom</label> <br/>
                        <select>
                            <option>April 28, 20221</option>
                            <option>002</option>
                            <option>003</option>
                        </select>
                    </div>
                    <div>
                        <label>Week of</label> <br/>
                        <select>
                            <option>March 28, 2022</option>
                            <option>April 28, 2022</option>
                            <option>june 28, 2022</option>
                        </select>
                    </div>
                </div>
                <div className='health-icons'>
                    <i>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0.209864L14 2.18358C14 2.31779 13.9342 2.44411 13.8263 2.52306L3.52088 9.9995L13.8263 17.4759C13.9342 17.5549 14 17.6812 14 17.8154L14 19.7891C14 19.9602 13.8053 20.0602 13.6658 19.9602L0.873473 10.6811C0.410307 10.3442 0.410307 9.65476 0.873473 9.32054L13.6658 0.041439C13.8053 -0.0611935 14 0.0388088 14 0.209864Z" fill="white"/>
                        </svg>                    
                    </i>
                    <i className='arrow-icon'>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-8.65054e-07 0.209864L-7.7878e-07 2.18358C-7.72914e-07 2.31779 0.0657899 2.44411 0.173686 2.52306L10.4791 9.9995L0.173687 17.4759C0.0657906 17.5549 -1.01358e-07 17.6812 -9.5491e-08 17.8154L-9.21712e-09 19.7891C-1.74005e-09 19.9602 0.19474 20.0602 0.334216 19.9602L13.1265 10.6811C13.5897 10.3442 13.5897 9.65476 13.1265 9.32054L0.334215 0.041439C0.194739 -0.0611935 -8.72531e-07 0.0388088 -8.65054e-07 0.209864Z" fill="white"/>
                        </svg>
                    </i>
                </div>
            </div>
            <div className='health-mains'>
                <div className="Health-dates">
                    <div className='Health-Time'>
                        <p>Time</p>
                    </div>
                    <div className='Health-days'>
                        <p>Mon,Apr 4</p>
                        <p>Tue,Apr 5</p>
                        <p>Wed,Apr 6</p>
                        <p>Thu,Apr 7</p>
                        <p>Fri,Apr 8</p>
                    </div>
                </div>
                <div className='bg-white'>

                </div>
                <div className='health-checkbox-main'>
                    
                    <div className='health-checkbox'>
                        <div><b><small>Observations</small></b></div>
                        <div>
                            <input type="checkbox" />
                            <p>N : Runny Nose</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>G : Cough</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>D : Diarrhea</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>F : Fever</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>M : Vomiting</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>B : Breating</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>Abnormally</p>
                        </div>
                        
                    </div>
                    <div className='health-checkbox health-checkbox-two'>
                        <div>
                            <input type="checkbox" />
                            <p>S : Skin Rush</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>C : Cuts</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>U : Bruises</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>V : Behavior</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>O : Other</p>
                        </div>
                    </div>
                </div>  
                <div className='health-button'>
                    <button>
                    <svg width="15" height="10" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.43164 13.8531L9.43164 12.4715C9.43164 12.3775 9.38559 12.2891 9.31006 12.2339L2.09626 7.00035L9.31006 1.76684C9.38559 1.71158 9.43164 1.62315 9.43164 1.52921L9.43164 0.147604C9.43164 0.0278654 9.29532 -0.0421358 9.19769 0.0278653L0.243071 6.52324C-0.0811446 6.75903 -0.0811446 7.24167 0.243071 7.47562L9.19769 13.971C9.29532 14.0428 9.43164 13.9728 9.43164 13.8531Z" fill="#FDFDFD"/>
                        <path d="M18.4316 13.8531L18.4316 12.4715C18.4316 12.3775 18.3856 12.2891 18.3101 12.2339L11.0963 7.00035L18.3101 1.76684C18.3856 1.71158 18.4316 1.62315 18.4316 1.52921L18.4316 0.147604C18.4316 0.0278654 18.2953 -0.0421358 18.1977 0.0278653L9.24307 6.52324C8.91886 6.75903 8.91886 7.24167 9.24307 7.47562L18.1977 13.971C18.2953 14.0428 18.4316 13.9728 18.4316 13.8531Z" fill="#FDFDFD"/>
                    </svg>
                    <p>001 Enrollment</p>
                    </button>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Health