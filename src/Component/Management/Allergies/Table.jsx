import React, { useState, useEffect } from "react";
import "../table.css";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import axios from "axios";
import { Edit } from "@material-ui/icons";

const AllergiesTableComponent = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://daycare.softsourcesolution.com/allergies/")
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
            <h2>Happy Children Daycare Allergies / Medical Notes Report</h2>
          </div>
          <Link to="/allergies-form" style={{ textDecoration: "none" }}>
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
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              const { id, title, desc, status } = item;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{desc}</td>
                  <td>{status ? "Active" : "Inactive"}</td>
                  <td>
                    <Link to="/allergies-form">
                      <Button className="btn-end" variant="contained">
                        <Edit />
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </React.Fragment>
  );
};

export default AllergiesTableComponent;
