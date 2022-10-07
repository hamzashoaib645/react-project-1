import React, { useState } from "react";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllergiesFormComponent = () => {
  // step-1 (store data in state)
  const [data, setData] = useState({
    title: "",
    desc: "",
    status: "active",
  });

  // step-2 ()
  let name, value;
  const getAllergyData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setData({ ...data, [name]: value });
  };

  // step-3 (submit form)
  function sendData(myData) {
    const data = { ...myData, centerid: 1, userid: 1, mode: "I" };
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "http://daycare.softsourcesolution.com/allergies/";

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
      window.location.replace("http://localhost:3000/allergies-management");
    }, 300);
	toast("Requested form data saved Successfully");
  }

  return (
    <div className="Child-form">
      <div className="Child-form-header">
        <h2>Add Allergies Information</h2>
      </div>

      <React.Fragment>
        <Container maxWidth="x-lg">
          <form className="form">
            <label>Title</label> <br />
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={getAllergyData}
              className="inputs"
            />{" "}
            <br />
            <label>Description</label> <br />
            <textarea
              name="desc"
              value={data.desc}
              onChange={getAllergyData}
              width="100%"
              cols={47}
              rows={5}
            />{" "}
            <br />
            <div className="form-radio">
              <label>Status</label>
              <input
                type="radio"
                name="status"
                onChange={() => setData({ ...data, status: "active" })}
                checked={data["status"] === "active"}
              />{" "}
              Active
              <input
                type="radio"
                name="status"
                onChange={() => setData({ ...data, status: "inactive" })}
                checked={data["status"] === "inactive"}
              />{" "}
              In-Active
            </div>
            <div className="btn-end1">
              <Button onClick={() => sendData(data)} variant="contained">
                Save
              </Button>
            </div>
          </form>
        </Container>
      </React.Fragment>

      <ToastContainer />
    </div>
  );
};

export default AllergiesFormComponent;
