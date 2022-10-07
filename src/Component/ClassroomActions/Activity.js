import React from "react";
import { Button } from "@mui/material";

import girls from "../ClassRoster/assests/girl.png";
import "./card.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ActivityComponent = () => {
  const [formData, setFormData] = React.useState({
    childid: "1",
    centerid: "1",
    classid: "1",
    desc: "",
  });

  function sendData() {
    const data = { ...formData, centerid: 1, userid: 1, mode: "I" };
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "http://daycare.softsourcesolution.com/childactivity/";

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
      window.location.replace(
        "http://localhost:3000/classroom-actions/activity"
      );
    }, 300);
	toast("Requested data saved Successfully");
  }

  return (
    <div>
      <div className="time-main">
        <div className="notes">
          <h2>Description</h2>
          <input
            type="text"
            value={formData["desc"]}
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          />
        </div>
        <div className="create">
          <Button onClick={sendData}>Create Entry</Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityComponent;
