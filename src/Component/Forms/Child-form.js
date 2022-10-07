import React, { useState } from "react";
import Formhead from "./Formhead";
import Enrollment from "../../components/layout/Enrollment/index";
import Contact from "../../components/layout/Contact/index";
import { Button } from "@mui/material";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import "../../Component/Sidebar/layout.css";

function Childform() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    dob: [0, "", 0],
    gender: "boy",
    permitted: false,
    enrlStatus: "active",
    enrlDate: [0, "", 0],
    enrlRotation: "morning",
    enrlSchedule: [],
    c_address: "",
    extranote: "",
    c_city: "",
    c_state: "",
    c_country: "",
    c_zip: "",
    emery_name: "",
    emery_relation: "",
    emery_phone: "",
    emery_address: "",
    p_fname: "",
    p_lname: "",
    p_gender: "",
    p_address: "",
    p_state: "",
    p_city: "",
    p_country: "",
    p_zipcode: "",
    p_phone: "",
  });

  function submitForm() {
    console.log(formData);
    const newData = {};
     sendData(formData);
  }

  function sendData(myData) {
    const data = { ...myData, centerid: 1, userid: 1, mode: "I" };
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "http://daycare.softsourcesolution.com/addchild/";

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
      window.location.replace("http://localhost:3000/classroom-actions");
    }, 500);
  }

  return (
    <div className="Child-form">
      <div className="Child-form-header">
        <h2>Add Child Profile</h2>
        <Button>
          <VideoCameraBackIcon />
          <b>Videos:</b>:Adding & Editing Profiles
        </Button>
      </div>
      <Formhead formData={formData} setFormData={setFormData} />
      <Enrollment formData={formData} setFormData={setFormData} />
      <Contact
        formData={formData}
        setFormData={setFormData}
        submitForm={submitForm}
      />
    </div>
  );
}

export default Childform;
