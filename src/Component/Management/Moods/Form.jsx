import React, { useState } from "react";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MoodsFormComponent = () => {
  const [data, setData] = useState({
    title: "",
    desc: "",
    status: "active",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const postData = async () => {
    sendData({ ...data, centerid: 1, userid: 1, mode: "I" });
  };

  function sendData(data) {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "http://daycare.softsourcesolution.com/moods/";

    const dataKeys = Object.keys(data);
    for (let i = 0; i < dataKeys.length; i++) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = dataKeys[i];
      input.value = data[dataKeys[i]];
      form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
    setTimeout(() => {
      window.location.replace("http://localhost:3000/moods-management");
    }, 300);
	toast("Requested form data saved Successfully");
  }

  return (
    <div className="Child-form">
      <div className="Child-form-header">
        <h2>Add Moods Information</h2>
      </div>

      <React.Fragment>
        <Container maxWidth="x-lg">
          <form className="form">
            <label>Title</label> <br />
            <input
              type="text"
              className="inputs"
              onChange={handleChange}
              name="title"
              value={data["title"]}
            />{" "}
            <br />
            <label>Description</label> <br />
            <textarea
              width="100%"
              cols={47}
              rows={5}
              onChange={handleChange}
              name="desc"
              value={data["desc"]}
            />{" "}
            <br />
            <div className="form-radio">
              <label>Status</label>
              <input
                type="radio"
                name="status"
                checked={data["status"] == "active"}
                onChange={() => setData({ ...data, status: "active" })}
              />{" "}
              Active
              <input
                type="radio"
                name="status"
                checked={data["status"] == "inactive"}
                onChange={() => setData({ ...data, status: "inactive" })}
              />{" "}
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

export default MoodsFormComponent;
