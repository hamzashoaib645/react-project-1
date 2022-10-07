import React from "react";
import "./style.css";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Fluids() {
  const [formData, setFormData] = React.useState({
    childid: "1",
    centerid: "1",
    classid: "1",
    notes: "",
    fluids_time: ["12 AM", "10"],
    fluids_option: 1,
    fluid_floz: "",
  });

  function sendData() {
    let myData = formData;
    const data = { ...myData, centerid: 1, userid: 1, mode: "I" };
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "http://daycare.softsourcesolution.com/childfluid/";

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
      window.location.replace("http://localhost:3000/classroom-actions/fluids");
    }, 300);
	toast("Requested data saved Successfully");
  }

  return (
    <div className="container-fluid">
      <h3>Time</h3>
      <div className="time">
        <select
          onChange={(e) =>
            setFormData({
              ...formData,
              fluids_time: [e.target.value, formData["fluids_time"][1]],
            })
          }
        >
          <option>12 AM</option>
          <option>1 AM</option>
          <option>2 AM</option>
          <option>3 AM</option>
          <option>4 AM</option>
          <option>5 AM</option>
          <option>6 AM</option>
          <option>7 AM</option>
          <option>8 AM</option>
          <option>9 AM</option>
          <option>10 AM</option>
          <option>11 AM</option>
          <option>12 PM</option>
          <option>1 PM</option>
          <option>2 PM</option>
          <option>3 PM</option>
          <option>4 PM</option>
          <option>5 PM</option>
          <option>6 PM</option>
          <option>7 PM</option>
          <option>8 PM</option>
          <option>9 PM</option>
          <option>10 PM</option>
          <option>11 PM</option>
        </select>
        <p>:</p>
        <select
          onChange={(e) =>
            setFormData({
              ...formData,
              fluids_time: [formData["fluids_time"][0], e.target.value],
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
     
      <h3>Fluid</h3>
      <div className="fluid-items-container">
        <div className="fluid-item">
          <input
            type="radio"
            name="fluid"
            onChange={() => setFormData({ ...formData, fluids_option: 1 })}
            checked={formData["fluids_option"] === 1}
          />
          <p>Milk</p>
        </div>
        <div className="fluid-item">
          <input
            type="radio"
            name="fluid"
            onChange={() => setFormData({ ...formData, fluids_option: 2 })}
            checked={formData["fluids_option"] === 2}
          />
          <p>Formula</p>
        </div>
        <div className="fluid-item">
          <input
            type="radio"
            name="fluid"
            onChange={() => setFormData({ ...formData, fluids_option: 3 })}
            checked={formData["fluids_option"] === 3}
          />
          <p>Breast Milk</p>
        </div>
        <div className="fluid-item">
          <input
            type="radio"
            name="fluid"
            onChange={() => setFormData({ ...formData, fluids_option: 4 })}
            checked={formData["fluids_option"] === 4}
          />
          <p>Water</p>
        </div>
        <div className="fluid-item">
          <input
            type="radio"
            name="fluid"
            onChange={() => setFormData({ ...formData, fluids_option: 5 })}
            checked={formData["fluids_option"] === 5}
          />
          <p>Other</p>
        </div>
      </div>
      <div className="floz">
        <h3>Floz</h3>
        <select
          onChange={(e) =>
            setFormData({ ...formData, fluid_floz: e.target.value })
          }
        >
          <option>0</option>
          <option>1</option>
        </select>
      </div>
      <div className="note-container">
        <h3>Notes</h3>
        <textarea
		className="Textarea_call"
          value={formData["notes"]}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        ></textarea>
      </div>
      <Button
        variant="contained"
        className="btn-end"
        style={{ marginTop: "15px" }}
        onClick={sendData}
      >
        Create Entry
      </Button>
    </div>
  );
}

export default Fluids;
