import React from 'react'
import BillingReport from '../../Component/Reports/billing reports/BillingReport'
import CenterReports from '../../Component/Reports/center reports/CenterReports'
import Child from '../../Component/Reports/child reports/Child'
import ClassRoomReports from '../../Component/Reports/classroom reports/ClassRoomReports'
import '../../Layout/Reports/Main.css'
import StaffReport from '../../Component/Reports//staff reports/StaffReport'

function Reports() {
  return (
    <>
      <div className='main-heading'>
        <h2>Reports</h2>
      </div>
      <div className='reports'>
        <div className='child-reports'>
          <Child />
        </div>
        <div className='cr-reports'>
          <ClassRoomReports />
        </div>
      </div>
      <CenterReports />
      <StaffReport />
      <BillingReport />
    </>
  )
}

export default Reports
