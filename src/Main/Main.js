import React from 'react'
import '../Component/Sidebar/layout.css'
import Sidebar from '../Component/Sidebar/sidebar'
import Content from '../Component/CenterSection/Content'
import Navbar from '../Component/NavBar/Navbar'

const Main = () => {
  return (
    <>
      <div className='main'>
        <div className='sidebar'>
          <Sidebar />
        </div>

        <div className='content'>
          <Navbar />
          <Content />
        </div>
      </div>
    </>
  )
}

export default Main
