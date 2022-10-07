import React from "react";
import "./StaffReport.css";
import ReportButton from "../child reports/ReportButton";

function StaffReport() {
  return (
    <>
      <div className='staff-reports'>
        <div className='staff-desc'>
          <h3>Staff Reports</h3>
          <p>Get center-wide reports about your staff.</p>
        </div>
        <div className='staff-buttons'>
          <div className='btn-1'>
            <ReportButton name='Staff Roster' />
          </div>
          <div className='btn-2'>
            <ReportButton name='Staff Time Log' />
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffReport;
