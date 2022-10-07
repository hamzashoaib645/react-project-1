import React from "react";
import "./CenterData.css";

function CenterData(props) {
  return (
    <>
      <div className='reports-data'>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </>
  );
}

export default CenterData;
