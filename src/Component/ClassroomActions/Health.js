import React from "react";
import { Button } from "@mui/material";

import girls from "../ClassRoster/assests/girl.png";
import "./card.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HealthComponent = () => {
  const [formData, setFormData] = React.useState({
    childid: "1",
    centerid: "1",
    classid: "1",
    health_status: "",
    observation: [],
    desc: "",
  });
  function submitForm() {
    sendData(formData);
  }
  function sendData(myData) {
    const data = {
      ...myData,
      centerid: 1,
      userid: 1,
      mode: "I",
      observation: formData["observation"].toString(),
    };
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "http://daycare.softsourcesolution.com/childhealth/";

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
      window.location.replace("http://localhost:3000/classroom-actions/health");
    }, 300);
	toast("Requested data saved Successfully");
  }
  return (
    <div>
      <div className="time-main" style={{ backgroundColor: "white" }}>
        <br />
		<div className="mainoutersection">
        <form className="form">
          <label>Health</label> <br />
          <div className="form-radio">
            <input
              type="radio"
              name="health"
              checked={formData["health_status"] === "fine"}
              onChange={() =>
                setFormData({ ...formData, health_status: "fine" })
              }
            />{" "}
            Fine
            <input
              type="radio"
              name="health"
              checked={formData["health_status"] === "sick"}
              onChange={() =>
                setFormData({ ...formData, health_status: "sick" })
              }
            />{" "}
            Sick
            <input
              type="radio"
              name="health"
              checked={formData["health_status"] === "injured"}
              onChange={() =>
                setFormData({ ...formData, health_status: "injured" })
              }
            />{" "}
            Injured
          </div>
          <div className="AddOn-checkbox-text">
            <label>Observations</label> <br />
            <div className="health-checkbox">
              <div className="health-checkbox_Inner">
                <b>
                  <small>Observations</small>
                </b>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      observation: [...formData["observation"], "N"],
                    });
                  }}
                />
                <p>N : Runny Nose</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      observation: [...formData["observation"], "G"],
                    });
                  }}
                />
                <p>G : Cough</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      observation: [...formData["observation"], "D"],
                    });
                  }}
                />
                <p>D : Diarrhea</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      observation: [...formData["observation"], "F"],
                    });
                  }}
                />
                <p>F : Fever</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      observation: [...formData["observation"], "M"],
                    });
                  }}
                />
                <p>M : Vomiting</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      observation: [...formData["observation"], "B"],
                    });
                  }}
                />
                <p>B : Breating</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Abnormally</p>
              </div>
            </div>
            <div className="health-checkbox health-checkbox-two">
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      observation: [...formData["observation"], "S"],
                    });
                  }}
                />
                <p>S : Skin Rush</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      observation: [...formData["observation"], "C"],
                    });
                  }}
                />
                <p>C : Cuts</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      observation: [...formData["observation"], "U"],
                    });
                  }}
                />
                <p>U : Bruises</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      observation: [...formData["observation"], "V"],
                    });
                  }}
                />
                <p>V : Behavior</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      observation: [...formData["observation"], "O"],
                    });
                  }}
                />
                <p>O : Other</p>
              </div>
            </div>
          </div>
          <label className="NoteWidth">Notes</label> <br />
          <textarea
		  	className="Textarea_call"
            width="100%"
            cols={47}
            rows={5}
            value={formData["desc"]}
            onChange={(e) => {
              setFormData({ ...formData, desc: e.target.value });
              console.log(formData);
            }}
          />{" "}
          <br />
          <div className="create">
            <Button variant="contained" onClick={submitForm}>
              Create Entry
            </Button>
          </div>
        </form>
		</div>
      </div>
    </div>
  );
};

export default HealthComponent;
