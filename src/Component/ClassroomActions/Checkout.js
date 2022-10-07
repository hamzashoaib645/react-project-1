import React from "react";
import "./style.css";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Checkout() {
  return (
    <div className="container-fluid">
      <h3>Time</h3>
      <div className="time">
        <select>
          <option>6 AM</option>
          <option>7 AM</option>
          <option>8 AM</option>
          <option>9 AM</option>
          <option>10 AM</option>
        </select>
        <p>:</p>
        <select>
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
          <option>59</option>
        </select>
      </div>
      <div className="floz">
        <h3>Reason</h3>
        <select>
          <option>Optional</option>
          <option>Why</option>
          <option>What</option>
          <option>Why</option>
        </select>
      </div>
      <div className="note-container">
        <h3>Notes</h3>
        <textarea></textarea>
      </div>
      <Button
        variant="contained"
        className="btn-end"
        style={{ marginTop: "15px" }}
      >
        Create Entry
      </Button>
    </div>
  );
}

export default Checkout;
