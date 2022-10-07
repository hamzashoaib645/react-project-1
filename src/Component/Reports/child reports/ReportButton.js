import React from "react";
import "./ReportButton.css";

function ReportButton(props) {
  return (
    <div>
      <div className='Report_btn'>
        <button> {props.name} </button>
      </div>
    </div>
  );
}

export default ReportButton;
