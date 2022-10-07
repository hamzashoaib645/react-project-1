import React from "react";
import "./style.css";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toilet() {
  const [formData, setFormData] = React.useState({
    childid: "1",
    centerid: "1",
    classid: "1",
    extra_note: "",
    toilet_time: [],
    toilet_type: "",
    toilet_opt: "",
  });
  function submitForm() {
    sendData({
      ...formData,
      toilet_time: formData.toilet_time.toString(),
      toilet_Type: formData.toilet_type,
    });
  }
  function sendData(myData) {
    const data = { ...myData, centerid: 1, userid: 1, mode: "I" };
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "http://daycare.softsourcesolution.com/childtoilet/";

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
   // form.submit();
	//toast("Requested data saved Successfully");
    setTimeout(() => {
      window.location.replace("http://localhost:3000/classroom-actions/toilet");
    }, 300);
	toast("Requested data saved Successfully");
  }
  return (
    <div>
      <div className="container-fluid">
        <h3>Time</h3>
        <div className="time">
          <select
            onChange={(e) =>
              setFormData({
                ...formData,
                toilet_time: [e.target.value, formData["toilet_time"][1]],
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
                toilet_time: [formData["toilet_time"][0], e.target.value],
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
        <h3>Type</h3>
        <div className="fluid-items-container">
          <div className="fluid-item">
            <input
              type="radio"
              checked={formData["toilet_type"] === "diaper"}
              onChange={() =>
                setFormData({ ...formData, toilet_type: "diaper" })
              }
            />
            <p>Diaper</p>
          </div>
          <div className="fluid-item">
            <input
              type="radio"
              checked={formData["toilet_type"] === "potty"}
              onChange={() =>
                setFormData({ ...formData, toilet_type: "potty" })
              }
            />
            <p>Potty</p>
          </div>
          <div className="fluid-item">
            <input
              type="radio"
              checked={formData["toilet_type"] === "sat on potty"}
              onChange={() =>
                setFormData({
                  ...formData,
                  toilet_type: "sat on potty",
                })
              }
            />
            <p>Sat on potty</p>
          </div>
          <div className="fluid-item">
            <input
              type="radio"
              checked={formData["toilet_type"] === "underwear"}
              onChange={() =>
                setFormData({ ...formData, toilet_type: "underwear" })
              }
            />
            <p>Underwear</p>
          </div>
        </div>

        <h3>Toilet</h3>
        <div className="fluid-items-container">
          <div className="fluid-item">
            <input
              type="radio"
              checked={formData["toilet_opt"] === "dry"}
              onChange={() => setFormData({ ...formData, toilet_opt: "dry" })}
            />
            <p>Dry</p>
          </div>
          <div className="fluid-item">
            <input
              type="radio"
              checked={formData["toilet_opt"] === "wet"}
              onChange={() => setFormData({ ...formData, toilet_opt: "wet" })}
            />
            <p>Wet</p>
          </div>
          <div className="fluid-item">
            <input
              type="radio"
              checked={formData["toilet_opt"] === "powed movement"}
              onChange={() =>
                setFormData({
                  ...formData,
                  toilet_opt: "powed movement",
                })
              }
            />
            <p>Powed Movement</p>
          </div>
          <div className="fluid-item">
            <input
              type="radio"
              checked={formData["toilet_opt"] === "peed"}
              onChange={() => setFormData({ ...formData, toilet_opt: "peed" })}
            />
            <p>Peed</p>
          </div>
          <div className="fluid-item">
            <input
              type="radio"
              checked={formData["toilet_opt"] === "applied cream"}
              onChange={() =>
                setFormData({
                  ...formData,
                  toilet_opt: "applied cream",
                })
              }
            />
            <p>Applied cream</p>
          </div>
          <div className="fluid-item">
            <input
              type="radio"
              checked={formData["toilet_opt"] === "had an accident"}
              onChange={() =>
                setFormData({
                  ...formData,
                  toilet_opt: "had an accident",
                })
              }
            />
            <p>Had an accident</p>
          </div>
        </div>
        <div className="note-container">
          <h3>Notes</h3>
          <textarea
            value={formData.extra_note}
            onChange={(e) =>
              setFormData({ ...formData, extra_note: e.target.value })
            }
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
    </div>
  );
}

export default Toilet;
