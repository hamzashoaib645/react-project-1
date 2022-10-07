import React, { useState, useEffect } from "react";
import "../table.css";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import axios from "axios";
import { Edit } from "@material-ui/icons";

const EpipenbrandTableComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://daycare.softsourcesolution.com/epipenbrand/")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="x-lg">
        <div className="staff-list-head">
          <div className="staff-list-heading">
            <h2>Happy Children Daycare Epipenbrand / Medical Notes Report</h2>
          </div>
          <Link to="/epipenbrand-form" style={{ textDecoration: "none" }}>
            <Button className="btn-end" variant="contained">
              Add
            </Button>
          </Link>
        </div>

        <table className="table" id="Table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.status ? "Active" : "Inactive"}</td>
                <td>
                  <Link to="/epipenbrand-form">
                    <Button className="btn-end" variant="contained">
                      <Edit />
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </React.Fragment>
  );
};

export default EpipenbrandTableComponent;
