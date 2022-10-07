import React from "react";
import { Button } from "@mui/material";

import girls from "../../assests/girl.png";
import "./Apply.css";
function Apply() {
  return (
    <div>
      <div className="apply-header">
        <div>
          <h2>Apply to</h2>
        </div>
        <div className="select-all">
          <Button>Select All</Button>
        </div>
      </div>
      <div></div>

      <div className="jane">
        <div className="img-cirle">
          <div>
            <img src={girls} />
          </div>
          <div>
            <h4 className="D">Jane D.</h4>
          </div>
        </div>
        <div className="girl-svg">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1667 29.3333C22.9907 29.3333 29.3333 22.9907 29.3333 15.1667C29.3333 7.34263 22.9907 1 15.1667 1C7.34263 1 1 7.34263 1 15.1667C1 22.9907 7.34263 29.3333 15.1667 29.3333Z"
              stroke="#00AEEF"
              stroke-width="2"
            />
            <path
              d="M9.5 12.0417L15.1667 17.7084L20.8333 12.0417"
              stroke="#00AEEF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="time-main">
        {/* <div className="time-ser">
          <h2 className="time">Time</h2>
        </div>
        <div className="notes-container">
          <div className="select">
            <select className="cars" id="Truck">
              <option value="volvo">04 AM</option>
              <option value="saab"></option>
              <option value="mercedes"></option>
              <option value="audi"></option>
            </select>
            <span className="dot">:</span>
            <select className="cars" id="Truck">
              <option value="volvo">49</option>
              <option value="saab"></option>
              <option value="mercedes"></option>
              <option value="audi"></option>
            </select>
          </div>
          <div className="mainnumbers">
            <div className="numbers">
              <h3>-5</h3>
            </div>
            <div className="numbers">
              <h3>-10</h3>
            </div>
            <div className="numbers">
              <h3>-15</h3>
            </div>
            <div className="numbers">
              <h3>-30</h3>
            </div>
            <div className="numbers">
              <h3 className="now">NOW</h3>
            </div>
          </div>
        </div> */}
        <div className="notes">
          <h2>Notes</h2>
          <input type="text" />
        </div>
        <div className="create">
          <Button>Create Entery</Button>
        </div>
      </div>
    </div>
  );
}

export default Apply;
