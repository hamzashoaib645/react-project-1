import React from "react";
import { Button } from "@mui/material";

import girls from "../ClassRoster/assests/girl.png";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TemperatureComponent = () => {
  const [formData, setFormData] = React.useState({
    child_temp: "",
    extra_note: "Hey",
  });
  function submitForm() {
    sendData({
      ...formData,
      classid: 1,
      check_time: "12AM",
      temp_status: 1,
      childid: 1,
    });
  }
  function sendData(myData) {
    const data = { ...myData, center_id: 1, userid: 1, mode: "I" };
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "http://daycare.softsourcesolution.com/childtmp/";

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
	
    setTimeout(() => {
      window.location.replace(
        "http://localhost:3000/classroom-actions/temperature"
      );
    }, 300);
	toast("Requested data saved Successfully");
  }
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="time-main">
        <h3 style={{ marginLeft: "50px" }}>Temperature</h3> <br />
        <input
          type="text"
          className="inputs add_otherclass"
          value={formData["child_temp"]}
          onChange={(e) =>
            setFormData({ ...formData, child_temp: e.target.value })
          }
        />{" "}
        <br />
        <div className="notes">
          <h2>Notes</h2>
          <input type="text" />
        </div>
        <div className="create">
          <Button onClick={submitForm}>Create Entry</Button>
        </div>
      </div>
    </div>
  );
};

export default TemperatureComponent;
