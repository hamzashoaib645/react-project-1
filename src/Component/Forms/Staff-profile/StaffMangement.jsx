import React from 'react'
import '../Staff-profile/StaffManagement.css'
import ListHead from '../../Lists/ListHead'
import ListTwo from '../../Lists/ListTwo'
import ListChildRow from '../../Lists/listChildRow'
function StaffManagement() {
  return (
    <>
      <div className='Home'>
        <div className='list-bg-one'>
          <ListHead />
        </div>
        <div className='list-bg-two'>
          <ListTwo />
          <ListTwo />
          <ListTwo />
        </div>
        <div className='list-bg-three'>
          <ListChildRow />
        </div>
        <div className='list-bg-two'>
          <ListTwo />
          <ListTwo />
          <ListTwo />
        </div>
      </div>
    </>
  )
}

export default StaffManagement
