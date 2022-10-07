import React, { useState } from "react";
import "./contact.css";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Contact = ({ formData, setFormData, submitForm }) => {
  const [emergencyForm, setEmergencyForm] = useState(false);
  const [guardianForm, setGuardianForm] = useState(false);
  const [extraNotes, setExtraNotes] = useState(false);

  return (
    <React.Fragment>
      <Container maxWidth="x-lg">
        <div className="contact-heading">
          <h2>Contacts</h2>
        </div>
        <div className="contact-form-head">
          <div className="contact-text">
            <h5>PARENTS AND GUARDIANS</h5>
          </div>
          <div className="contact-form-btn">
            <Button
              style={{ color: "white" }}
              onClick={() => setGuardianForm(!guardianForm)}
            >
              Add Parents / Guardians
            </Button>
          </div>
        </div>
        <section
          style={{
            display: guardianForm ? "flex" : "none",
            flexDirection: "column",
          }}
          className="form-address"
        >
          <label>First Name</label>
          <input
            type="text"
            value={formData["p_fname"]}
            onChange={(e) =>
              setFormData({ ...formData, p_fname: e.target.value })
            }
          />

          <label>Last Name</label>

          <input
            type="text"
            value={formData["l_fname"]}
            onChange={(e) =>
              setFormData({ ...formData, p_lname: e.target.value })
            }
          />

          <label>Address</label>
          <input
            type="text"
            value={formData["p_address"]}
            onChange={(e) =>
              setFormData({ ...formData, p_address: e.target.value })
            }
          />

          <label>State</label>
          <input
            type="text"
            value={formData["p_state"]}
            onChange={(e) =>
              setFormData({ ...formData, p_state: e.target.value })
            }
          />

          <label>City</label>
          <input
            type="text"
            value={formData["p_city"]}
            onChange={(e) =>
              setFormData({ ...formData, p_city: e.target.value })
            }
          />

          <label>Country</label>
          <input
            type="text"
            value={formData["p_country"]}
            onChange={(e) =>
              setFormData({ ...formData, p_country: e.target.value })
            }
          />

          <label>Zip Code</label>
          <input
            type="text"
            value={formData["p_zipcode"]}
            onChange={(e) =>
              setFormData({ ...formData, p_zipcode: e.target.value })
            }
          />

          <label>Phone</label>
          <input
            type="text"
            value={formData["p_phone"]}
            onChange={(e) =>
              setFormData({ ...formData, p_phone: e.target.value })
            }
          />
        </section>
        <hr />
        <div className="contact-form-head">
          <div className="contact-text">
            <h5>EMERGENCY CONTACTS</h5>
          </div>
          <div className="contact-form-btn">
            <Button
              style={{ color: "white" }}
              onClick={() => setEmergencyForm(!emergencyForm)}
            >
              Add Emergency Contact
            </Button>
          </div>
        </div>
        <section style={{ display: emergencyForm ? "flex" : "none" }}>
          <form className="form-address">
            <label>Name</label>
            <br />
            <input
              type="text"
              value={formData["emery_name"]}
              onChange={(e) =>
                setFormData({ ...formData, emery_name: e.target.value })
              }
            />
            <br />

            <label>Relation</label>
            <br />
            <input
              type="text"
              value={formData["emery_relation"]}
              onChange={(e) =>
                setFormData({ ...formData, emery_relation: e.target.value })
              }
            />
            <br />

            <label>Phone</label>
            <br />
            <input
              type="text"
              value={formData["emery_phone"]}
              onChange={(e) =>
                setFormData({ ...formData, emery_phone: e.target.value })
              }
            />
            <br />

            <label>Address</label>
            <br />
            <input
              type="text"
              value={formData["emery_address"]}
              onChange={(e) =>
                setFormData({ ...formData, emery_address: e.target.value })
              }
            />
            <br />
          </form>
        </section>
        <hr />
        <form className="form-address">
          <div className="contact-heading">
            <h2>Address</h2>
          </div>
          <label>Address</label> <br />
          <input
            type="text"
            placeholder="street and number"
            value={formData["c_address"]}
            onChange={(e) =>
              setFormData({ ...formData, c_address: e.target.value })
            }
          />{" "}
          <br />
          <label>Address line 2 (optional)</label> <br />
          <input type="text" placeholder="Adt,sulte,etc" /> <br />
          <label>City</label> <br />
          <input
            type="text"
            placeholder="New york"
            value={formData["c_city"]}
            onChange={(e) =>
              setFormData({ ...formData, c_city: e.target.value })
            }
          />{" "}
          <br />
          <label>State and province</label> <br />
          <input
            type="text"
            placeholder="New york"
            value={formData["c_state"]}
            onChange={(e) =>
              setFormData({ ...formData, c_state: e.target.value })
            }
          />{" "}
          <br />
          <label>Country</label> <br />
          <input
            type="text"
            placeholder="USA"
            value={formData["c_country"]}
            onChange={(e) =>
              setFormData({ ...formData, c_country: e.target.value })
            }
          />{" "}
          <br />
          <label>Zip or Postal Code</label> <br />
          <input
            type="text"
            value={formData["c_zip"]}
            placeholder="Zip Code"
            onChange={(e) =>
              setFormData({ ...formData, c_zip: e.target.value })
            }
          />{" "}
          <br />
        </form>
        <div>
          <div className="contact-form-btn-end">
            <span>Records </span>
            <button type="button">Add Parents / Guardians</button>
          </div>
          <div className="contact-form-btn-last">
            <span>Additional Notes</span>
            <button type="button" onClick={() => setExtraNotes(!extraNotes)}>
              Add Profile Notes
            </button>
          </div>
        </div>
        <section
          style={{ display: extraNotes ? "block" : "none" }}
          className="extra-text-box"
        >
          <label>Add Extra Notes Here</label>
          <br />
          <textarea
            value={formData["extranote"]}
            onChange={(e) =>
              setFormData({ ...formData, extranote: e.target.value })
            }
          ></textarea>
        </section>
        <div className="btn-end1">
          <Button variant="contained" onClick={submitForm}>
            Add
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Contact;
