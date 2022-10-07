import React from "react";
import "./form.css";

// import material ui contiiner
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const Formhead = ({ formData, setFormData }) => {
  function updateDate(e) {
    const newDob = [formData["dob"][0], formData["dob"][1], e.target.value];
    setFormData({ ...formData, dob: newDob });
    console.log("Day Updated:", newDob);
  }
  function updateMonth(e) {
    const newDob = [formData["dob"][0], e.target.value, formData["dob"][2]];
    setFormData({ ...formData, dob: newDob });
    console.log("Month Updated:", newDob);
  }
  function updateYear(e) {
    const newDob = [e.target.value, formData["dob"][1], formData["dob"][2]];
    setFormData({ ...formData, dob: newDob });
    console.log("Year Updated:", newDob);
  }
  return (
    <React.Fragment>
      <Container maxWidth="x-lg">
        <form className="form">
          <label>First Name</label> <br />
          <input
            type="text"
            className="inputs"
            value={formData["fname"]}
            onChange={(e) =>
              setFormData({ ...formData, fname: e.target.value })
            }
          />{" "}
          <br />
          <label>Last Name</label> <br />
          <input
            type="text"
            className="inputs"
            value={formData["lname"]}
            onChange={(e) =>
              setFormData({ ...formData, lname: e.target.value })
            }
          />{" "}
          <br />
          <label>Date of Birth</label> <br />
          <select name="DOB" onChange={updateDate}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
			<option value="16">16</option>
			<option value="17">17</option>
			<option value="18">18</option>
			<option value="19">19</option>
			<option value="20">20</option>
			<option value="21">21</option>
			<option value="22">22</option>
			<option value="23">23</option>
			<option value="24">24</option>
			<option value="25">25</option>
			<option value="26">26</option>
			<option value="27">27</option>
			<option value="28">28</option>
			<option value="29">29</option>
			<option value="30">30</option>
			<option value="31">31</option>
          </select>
          <select name="DOB" className="form-select" onChange={updateMonth}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
			<option value="5">May</option>
			<option value="6">June</option>
			<option value="7">July</option>
			<option value="8">August</option>
			<option value="9">September</option>
			<option value="10">October</option>
			<option value="11">November</option>
			<option value="12">December</option>
          </select>
          <select name="DOB" className="form-select" onChange={updateYear}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
			<option value="2018">2018</option>
			<option value="2017">2017</option>
			<option value="2016">2016</option>
			<option value="2015">2015</option>
			<option value="2014">2014</option>
			<option value="2013">2013</option>
			<option value="2012">2012</option>
			<option value="2011">2011</option>
			<option value="2010">2010</option>
          </select>{" "}
          <br />
          <div className="form-radio">
            <label>Gender</label>
            <input
              type="radio"
              name="gender"
              value="1"
              checked
              onChange={() => setFormData({ ...formData, gender: "1" })}
            />
            Boy
            <input
              type="radio"
              name="gender"
              value="2"
              checked={formData["gender"] === "2"}
              onChange={() => setFormData({ ...formData, gender: "2" })}
            />
            Girl
            <input
              type="radio"
              name="gender"
              value="3"
              checked={formData["gender"] === "3"}
              onChange={() => setFormData({ ...formData, gender: "3" })}
            />{" "}
            X
          </div>
          <div className="file-btn">
            <Button
              type="file"
              variant="contained"
              style={{ backgroundColor: "lightgray" }}
              endIcon={<AttachFileIcon />}
            >
              Attach file
            </Button>{" "}
            <span>&nbsp;&nbsp;&nbsp; No file choosen</span>
          </div>
          <input type="checkbox" value="1" />{" "}
          <span style={{ fontWeight: "bold" }}>
            Permitted with photos and videos with other children
          </span>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default Formhead;
