import React from "react";
import "./style.css";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Food() {
  const [formData, setFormData] = React.useState({
    meal: "",
    quantity: "all",
    food: "",
  });

  function submitForm() {
    console.log(formData);
  }
  function sendData(myData) {
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
      window.location.replace("http://localhost:3000/classroom-actions/food");
    }, 300);
	toast("Requested data saved Successfully");
  }
  return (
    <div className="container-fluid">
      <div className="floz">
        <h3>Meal</h3>
        <select
          onChange={(e) => setFormData({ ...formData, meal: e.target.value })}
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
        </select>
      </div>

      <h3>Quantity</h3>
      <div className="fluid-items-container">
        <div className="fluid-item">
          <input
            type="radio"
            checked={formData["quantity"] === "all"}
            onChange={() => setFormData({ ...formData, quantity: "all" })}
          />
          <p>All</p>
        </div>
        <div className="fluid-item">
          <input
            type="radio"
            checked={formData["quantity"] === "most"}
            onChange={() => setFormData({ ...formData, quantity: "most" })}
          />
          <p>Most</p>
        </div>
        <div className="fluid-item">
          <input
            type="radio"
            checked={formData["quantity"] === "some"}
            onChange={() => setFormData({ ...formData, quantity: "some" })}
          />
          <p>Some</p>
        </div>
        <div className="fluid-item">
          <input
            type="radio"
            checked={formData["quantity"] === "none"}
            onChange={() => setFormData({ ...formData, quantity: "none" })}
          />
          <p>None</p>
        </div>
        <div className="fluid-item">
          <input type="radio" name="fluid" />
          <p>N/A</p>
        </div>
      </div>

      <div className="note-container">
        <h3>Food</h3>
        <textarea
          value={formData["food"]}
          onChange={(e) => setFormData({ ...formData, food: e.target.value })}
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

export default Food;
