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
    //form.submit();
	//toast("Requested data saved Successfully");
    setTimeout(() => {
      window.location.replace("http://localhost:3000/classroom-actions/notes");
    }, 300);
	toast("Requested data saved Successfully");
  }

  return (
    <div className="container-fluid">
      <h3>Notes</h3>
      <div className="fluid-items-container">
        <div className="fluid-item">
          <input
            type="radio"
            name="fluid"
            onChange={() => setFormData({ ...formData, fluids_option: 1 })}
            checked={formData["fluids_option"] === 1}
          />
          <p>General</p>
        </div>
        <div className="fluid-item">
          <input
            type="radio"
            name="fluid"
            onChange={() => setFormData({ ...formData, fluids_option: 2 })}
            checked={formData["fluids_option"] === 2}
          />
          <p>Notice</p>
        </div>
        <div className="fluid-item">
          <input
            type="radio"
            name="fluid"
            onChange={() => setFormData({ ...formData, fluids_option: 3 })}
            checked={formData["fluids_option"] === 3}
          />
          <p>Incident</p>
        </div>
        <div className="fluid-item">
          <input
            type="radio"
            name="fluid"
            onChange={() => setFormData({ ...formData, fluids_option: 4 })}
            checked={formData["fluids_option"] === 4}
          />
          <p>Medication Administered</p>
        </div>
        
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
