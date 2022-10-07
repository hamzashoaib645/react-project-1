import React, { useState } from "react";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const EpipenbrandFormComponent = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    status: "active",
  });
  function postData() {
    const data = { ...formData, mode: "I", centerid: 1, userid: 1 };
    console.log(data);
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "http://daycare.softsourcesolution.com/epipenbrand/";

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
      window.location.replace("http://localhost:3000/epipenbrand-management");
    }, 300);
	toast("Requested form data saved Successfully");
  }
  return (
    <div className="Child-form">
      <div className="Child-form-header">
        <h2>Add Epipenbrand Information</h2>
      </div>
      <React.Fragment>
        <Container maxWidth="x-lg">
          <form className="form">
            <label>Title</label> <br />
            <input
              type="text"
              className="inputs"
              value={formData["title"]}
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
              }}
            />
            <br />
            <label>Description</label> <br />
            <textarea
              width="100%"
              cols={47}
              rows={5}
              value={formData["desc"]}
              onChange={(e) => {
                setFormData({ ...formData, desc: e.target.value });
              }}
            />
            <br />
            <div className="form-radio">
              <label>Status</label>
              <input
                type="radio"
                name="status"
                onChange={() => {
                  setFormData({ ...formData, status: "active" });
                }}
                checked={formData["status"] === "active"}
              />
              Active
              <input
                type="radio"
                name="status"
                onChange={() => {
                  setFormData({ ...formData, status: "inactive" });
                }}
                checked={formData["status"] === "inactive"}
              />
              In-Active
            </div>
            <div className="btn-end1">
              <Button variant="contained" onClick={postData}>
                Save
              </Button>
            </div>
          </form>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default EpipenbrandFormComponent;
