import React from "react";
import "./enrollmenttwo.css";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WcIcon from "@mui/icons-material/Wc";
import { Button } from "@mui/material";

const EnrollmentTwo = () => {
  return (
    <React.Fragment>
      <Container maxWidth="x-lg">
        {/* code of header */}
        <div className="staff-list-head">
          <div className="staff-list-heading">
            <h2>Enrollment</h2>
          </div>
          <div className="staff-list-btn">
            <Button variant="contained">
              Weekly Reports
              <i>
                <ExpandMoreIcon className="expanded-icon" />
              </i>
            </Button>

            <Link to="/Graph" className="Link">
              <Button variant="contained">
                Schedule Absences{" "}
                <i>
                  {" "}
                  <ExpandMoreIcon className="expanded-icon" />{" "}
                </i>{" "}
              </Button>
            </Link>
            <Link to="/Childform" className="roster-link">
              <Button variant="contained" className="btn-end">
                <i>
                  <WcIcon className="expanded-icon" />{" "}
                </i>{" "}
                Add Child{" "}
              </Button>
            </Link>
          </div>
        </div>

        {/* code of table */}
        <table className="table" id="Table">
          <thead className="table-head">
            <tr>
              <th>Name</th>
              <th>Schedule</th>
              <th>DOB</th>
              <th>Enrolled</th>
              <th>Allergies</th>
              <th>Actions</th>
            </tr>
          </thead>

          {/* code of tbody */}
          <tbody>
            <tr className="first-row">
              <td>John Doe</td>
              <td>
                {" "}
                <span> M TU W TH F </span> SA SU{" "}
              </td>
              <td>00/17/21</td>
              <td>02/11/21</td>
              <td></td>
              <td>
                <Link
                  to="/classroom-actions"
                  style={{ textDecoration: "none" }}
                >
                  <Button className="btn-end" variant="contained">
                    Actions
                    <i>
                      <ExpandMoreIcon className="expanded-icon" />
                    </i>{" "}
                  </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        {/* code of upcoming */}
        <div className="list-up-coming">
          <h2>Upcoming</h2>
        </div>
        <div className="list-text">
          <p>No upcoming enrollments.</p>
        </div>
        <div className="list-up-coming">
          <h2>Graduated</h2>
        </div>
        <div className="list-text">
          <p>No recently graduated children.</p>
          <button type="button">View All Graduated</button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default EnrollmentTwo;
