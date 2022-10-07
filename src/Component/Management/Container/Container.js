import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Button } from "@mui/material";
function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.link}>
        <h2>Allergies</h2>
        <Link to="/allergies-management">
          <a>Details</a>
        </Link>
      </div>
      <div className={styles.link}>
        <h2>Department</h2>
        <Link to="/department-management">
          <a>Details</a>
        </Link>
      </div>
      <div className={styles.link}>
        <h2>Diseases</h2>
        <Link to="/diseases-management">
          <a>Details</a>
        </Link>
      </div>
      <div className={styles.link}>
        <h2>Epipedbrand</h2>
        <Link to="/epipenbrand-management">
          <a>Details</a>
        </Link>
      </div>
      <div className={styles.link}>
        <h2>Moods</h2>
        <Link to="/moods-management">
          <a>Details</a>
        </Link>
      </div>
    </div>
  );
}

export default Container;
