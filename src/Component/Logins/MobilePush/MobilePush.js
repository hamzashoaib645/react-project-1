import React from 'react'
import './MobilePush.css'

function MobilePush() {
  return (
    <>
        <div className='MobilePush-main'>
            <div className='MobilePush-main-head'>
                <div className='MobilePush-icons-head'>
                    <div className='MobilePush-bell-icon'>
                    <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.5555 17.3177V14.4444H23.3332V17.7777C23.3333 18.0724 23.4504 18.3549 23.6588 18.5633L26.6666 21.571V23.3332H2.22221V21.571L5.22998 18.5633C5.43837 18.3549 5.55547 18.0724 5.55553 17.7777V13.3333C5.55244 11.7719 5.96142 10.2374 6.74118 8.88476C7.52094 7.53208 8.64386 6.40912 9.99651 5.62932C11.3492 4.84951 12.8837 4.44047 14.445 4.44351C16.0063 4.44656 17.5392 4.86157 18.8888 5.64664V3.16332C17.8311 2.69501 16.7062 2.39653 15.5555 2.27888V0H13.3333V2.27777C10.5939 2.55658 8.05526 3.84122 6.20816 5.88329C4.36107 7.92535 3.33677 10.5798 3.33332 13.3333V17.3177L0.325554 20.3255C0.117167 20.5338 6.29302e-05 20.8164 0 21.111V24.4443C0 24.739 0.117063 25.0216 0.325436 25.23C0.533808 25.4384 0.816423 25.5554 1.11111 25.5554H8.88885V26.6666C8.88885 28.14 9.47417 29.553 10.516 30.5949C11.5579 31.6368 12.971 32.2221 14.4444 32.2221C15.9178 32.2221 17.3309 31.6368 18.3727 30.5949C19.4146 29.553 19.9999 28.14 19.9999 26.6666V25.5554H27.7777C28.0723 25.5554 28.355 25.4384 28.5633 25.23C28.7717 25.0216 28.8888 24.739 28.8888 24.4443V21.111C28.8887 20.8164 28.7716 20.5338 28.5632 20.3255L25.5555 17.3177ZM17.7777 26.6666C17.7777 27.5506 17.4265 28.3985 16.8014 29.0236C16.1763 29.6487 15.3284 29.9999 14.4444 29.9999C13.5603 29.9999 12.7125 29.6487 12.0874 29.0236C11.4623 28.3985 11.1111 27.5506 11.1111 26.6666V25.5554H17.7777V26.6666Z" fill="white"/>
                        <path d="M25.5556 12.223C28.0102 12.223 30.0001 10.2332 30.0001 7.7786C30.0001 5.32401 28.0102 3.33417 25.5556 3.33417C23.101 3.33417 21.1112 5.32401 21.1112 7.7786C21.1112 10.2332 23.101 12.223 25.5556 12.223Z" fill="white"/>
                    </svg>


                    </div>
                    <div className='MobilePush-bell-text'>
                        <h2>Mobile Push Notifications</h2>
                    </div>
                </div>
                <div className='MobilePush-head-arrow'>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9976 1.65933C9.18283 0.55584 2.76379 5.18577 1.6603 12.0006C0.556812 18.8154 5.18674 25.2344 12.0015 26.3379C18.8163 27.4414 25.2354 22.8115 26.3389 15.9967C27.4424 9.18186 22.8124 2.76282 15.9976 1.65933Z" stroke="#00AEEF" stroke-width="2"/>
                <path d="M9 11.125L14 16.125L19 11.125" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                </div>
            </div>
            <div className='MobilePush-section-two'>
                <i>Select the types of updates you'd like directors and teachers to receive mobile notifications for.</i>
                <h4>Administrative logins</h4>
                <div className='MobilePush-checkbox-text'>
                    <input type="checkbox" />
                    <span>New messages from parents</span>
                </div>
                <div className='MobilePush-checkbox-text'>
                    <input type="checkbox" />
                    <span>New comments from parents</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default MobilePush