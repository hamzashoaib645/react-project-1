import React from 'react'
import './AddOn.css'

function AddOn() {
  return (
    <>
        <div className='AddOn-main'>
            <div className='AddOn-main-head'>
                <div className='AddOn-icons-head'>
                    <div className='AddOn-bell-icon'>
                    <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5333 0H1.96667C1.44525 0.000585602 0.945365 0.207976 0.57667 0.57667C0.207975 0.945365 0.000585602 1.44525 0 1.96667V20.65C0.000585602 21.1714 0.207975 21.6713 0.57667 22.04C0.945365 22.4087 1.44525 22.6161 1.96667 22.6167H27.5333C28.0547 22.6161 28.5546 22.4087 28.9233 22.04C29.292 21.6713 29.4994 21.1714 29.5 20.65V1.96667C29.4994 1.44525 29.292 0.945365 28.9233 0.57667C28.5546 0.207976 28.0547 0.000585602 27.5333 0V0ZM27.5333 20.65H1.96667V1.96667H27.5333L27.5346 20.65H27.5333Z" fill="#FDFBFB"/>
                    <path d="M13.2763 6.88576H24.5846V8.85242H13.2763V6.88576ZM9.83463 11.3108H24.5846V13.2774H9.83463V11.3108ZM9.83463 15.7358H24.5846V17.7024H9.83463V15.7358ZM4.48302 4.42743V12.3508L10.578 8.08438L4.48302 4.42743Z" fill="#FDFBFB"/>
                    </svg>

    

                    </div>
                    <div className='AddOn-bell-text'>
                        <h2>Add-on Features</h2>
                    </div>
                </div>
                <div className='AddOn-head-arrow'>
                
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9976 1.65933C9.18283 0.55584 2.76379 5.18577 1.6603 12.0006C0.556812 18.8154 5.18674 25.2344 12.0015 26.3379C18.8163 27.4414 25.2354 22.8115 26.3389 15.9967C27.4424 9.18186 22.8124 2.76282 15.9976 1.65933Z" stroke="#00AEEF" stroke-width="2"/>
<path d="M9 11.125L14 16.125L19 11.125" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



                </div>
            </div>
            <div className='AddOn-section-two'>
                <div className='AddOn-checkbox-text'>
                    <input type="checkbox" />
                    <span><b>Staff Management & Ratios</b></span>
                </div>
                <h6>Smart Billing</h6>
                <div className='AddOn-checkbox-text'>
                    <input type="checkbox" />
                    <span>New comments from parents</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddOn