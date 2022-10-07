import React from "react";
import "./style.css";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sleep() {
  const [formData, setFormData] = React.useState({
    start_time: [],
    end_time: [],
    sleeping_done: false,
    extra_note: "",
  });
  function submitForm() {
    sendData({
      ...formData,
      start_time: formData.start_time.toString(),
      end_time: formData.end_time.toString(),
    });
  }

  function sendData(myData) {
    const data = {
      ...myData,
      centerid: 1,
      childid: 1,
      userid: 1,
      mode: "I",
      sleeping_done: formData["sleeping_done"] ? "1" : "0",
    };
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "http://daycare.softsourcesolution.com/childsleeping/";

    const dataKeys = Object.keys(data);
    for (let i = 0; i < dataKeys.length; i++) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = dataKeys[i];
      input.value = data[dataKeys[i]];
      form.appendChild(input);
    }
    document.body.appendChild(form);
    console.log(form);
    form.submit();
	toast("Requested data saved Successfully");
    setTimeout(() => {
      window.location.replace("http://localhost:3000/classroom-actions/sleep");
    }, 300);
	toast("Requested data saved Successfully");
  }
  return (
    <div className="container-fluid">
      <h3>Start Time</h3>
      <div className="time">
        <select
          onChange={(e) =>
            setFormData({
              ...formData,
              start_time: [e.target.value, formData["start_time"][1]],
            })
          }
        >
          <option>6 AM</option>
          <option>7 AM</option>
          <option>8 AM</option>
          <option>9 AM</option>
          <option>10 AM</option>
        </select>
        <p>:</p>
        <select
          onChange={(e) =>
            setFormData({
              ...formData,
              start_time: [formData["start_time"][0], e.target.value],
            })
          }
        >
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
          <option>59</option>
        </select>
      </div>


      <h3>End Time</h3>
      <div className="time">
        <select
          onChange={(e) =>
            setFormData({
              ...formData,
              end_time: [e.target.value, formData["end_time"][1]],
            })
          }
        >
          <option>6 AM</option>
          <option>7 AM</option>
          <option>8 AM</option>
          <option>9 AM</option>
          <option>10 AM</option>
        </select>
        <p>:</p>
        <select
          onChange={(e) =>
            setFormData({
              ...formData,
              end_time: [formData["end_time"][0], e.target.value],
            })
          }
        >
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
          <option>59</option>
        </select>
      </div>
     
      <div>
        <input
          type="checkbox"
          onChange={() =>
            setFormData({
              ...formData,
              sleeping_done: !formData["sleeping_done"],
            })
          }
        />
        <label>Sleep Check</label>
      </div>
      <div className="note-container">
        <h3>Notes</h3>
        <textarea
          value={formData["extra_note"]}
          onChange={(e) => {
            setFormData({ ...formData, extra_note: e.target.value });
            console.log(formData);
          }}
        ></textarea>
      </div>
      <Button
        variant="contained"
        className="btn-end"
        style={{ marginTop: "15px" }}
        onClick={submitForm}
      >
        Create Entry
      </Button>
    </div>
  );
}

export default Sleep;
