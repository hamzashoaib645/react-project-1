import React from "react";
import "./enrollment.css";

import Container from "@mui/material/Container";

const Enrollment = ({ formData, setFormData }) => {
  function updateDate(e) {
    const newDob = [
      formData["enrlDate"][0],
      formData["enrlDate"][1],
      e.target.value,
    ];
    setFormData({ ...formData, enrlDate: newDob });
    console.log("Day Updated:", newDob);
  }
  function updateMonth(e) {
    const newDob = [
      formData["enrlDate"][0],
      e.target.value,
      formData["enrlDate"][2],
    ];
    setFormData({ ...formData, enrlDate: newDob });
    console.log("Month Updated:", newDob);
  }
  function updateYear(e) {
    const newDob = [
      e.target.value,
      formData["enrlDate"][1],
      formData["enrlDate"][2],
    ];
    setFormData({ ...formData, enrlDate: newDob });
    console.log("Year Updated:", newDob);
  }
  function updateSchedule(e) {
    let oldSchedule = formData["enrlSchedule"];
    let day = parseInt(e.target.value);
    let isFound = false;
    for (let i = 0; i < oldSchedule.length; i++) {
      if (oldSchedule[i] === day) {
        isFound = true;
        break;
      }
    }
    if (isFound) {
      let newSchedule = oldSchedule.filter((date) => date != day);
      setFormData({ ...formData, enrlSchedule: newSchedule });
    } else {
      let newSchedule = [...oldSchedule];
      newSchedule.push(day);
      setFormData({ ...formData, enrlSchedule: newSchedule });
    }
  }
  return (
    <React.Fragment>
      <Container maxWidth="x-lg">
        <div className="enrollment-heading">
          <h2>Enrollment</h2>
        </div>
        <form className="enrollment-form">
          <label>Classroom</label> <br />
          <select className="enrollment-select" name="value">
            <option value="00">00</option>
            <option value="11">01</option>
            <option value="7">02</option>
            <option value="3">03</option>
          </select>
          <div className="form-radio">
            <label>Status</label>
            <input
              type="radio"
              name="active"
              value="boy"
              checked={formData["enrlStatus"] === "active"}
              onChange={() => {
                setFormData({ ...formData, enrlStatus: "active" });
              }}
            />{" "}
            Active
            <input
              type="radio"
              name="active"
              value="girl"
              checked={formData["enrlStatus"] === "inactive"}
              onChange={() => {
                setFormData({ ...formData, enrlStatus: "inactive" });
              }}
            />{" "}
            Not active(Upcoming/Graduated)
          </div>
          <div className="">
            <select name="DOB" onChange={updateDate}>
              <option value="31">11</option>
              <option value="11">31</option>
              <option value="7">7</option>
              <option value="3">3</option>
            </select>
            <select name="DOB" className="form-select" onChange={updateMonth}>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="August">August</option>
            </select>
            <select name="DOB" className="form-select" onChange={updateYear}>
              <option value="2002">2022</option>
              <option value="2004">2021</option>
              <option value="2005">2005</option>
              <option value="2010">2010</option>
            </select>{" "}
            <br />
            <div className="form-radio">
              <label>Rotation</label>
              <input
                type="radio"
                name="timing"
                checked={formData["enrlRotation"] === "morning"}
                onChange={() =>
                  setFormData({ ...formData, enrlRotation: "morning" })
                }
              />{" "}
              Morning
              <input
                type="radio"
                name="timing"
                checked={formData["enrlRotation"] === "afternoon"}
                onChange={() =>
                  setFormData({ ...formData, enrlRotation: "afternoon" })
                }
              />{" "}
              Afternoon
              <input
                type="radio"
                name="timing"
                checked={formData["enrlRotation"] === "day"}
                onChange={() =>
                  setFormData({ ...formData, enrlRotation: "day" })
                }
              />{" "}
              Day
              <input
                type="radio"
                name="timing"
                checked={formData["enrlRotation"] === "before & after school"}
                onChange={() =>
                  setFormData({
                    ...formData,
                    enrlRotation: "before & after school",
                  })
                }
              />{" "}
              Before & After School
            </div>
            <div className="form-radio" style={{ marginTop: "10px" }}>
              <label>Schedule</label>
              <input
                type="checkbox"
                name="days"
                value="1"
                onChange={updateSchedule}
              />{" "}
              Mon
              <input
                type="checkbox"
                name="days"
                value="2"
                onChange={updateSchedule}
              />{" "}
              Tue
              <input
                type="checkbox"
                name="days"
                value="3"
                onChange={updateSchedule}
              />{" "}
              Wed
              <input
                type="checkbox"
                name="days"
                value="4"
                onChange={updateSchedule}
              />{" "}
              Thu
              <input
                type="checkbox"
                name="days"
                value="5"
                onChange={updateSchedule}
              />{" "}
              Fri
              <input
                type="checkbox"
                name="days"
                value="6"
                onChange={updateSchedule}
              />{" "}
              Sat
              <input
                type="checkbox"
                name="days"
                value="7"
                onChange={updateSchedule}
              />{" "}
              Sun
            </div>
          </div>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default Enrollment;
