import React from "react";
import AddEntry from "./addEntry/AddEntry";
import { Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ThermostatAutoOutlinedIcon from "@mui/icons-material/ThermostatAutoOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import SetMealOutlinedIcon from "@mui/icons-material/SetMealOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import BlenderOutlinedIcon from "@mui/icons-material/BlenderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import AddEntery from "../ClassRoster/AddEntery/AddEntery";
import { Link, Outlet } from "react-router-dom";
import img from "../ClassRoster/assests/girl.png";
function NavOptions() {
  return (
    <div>
      <div className="r-one">
        <Link to="checkin" className="Link White">
          <AddEntery
            imgsrc={<ArrowCircleRightOutlinedIcon className="icon" />}
            imgtitle="check in"
          />
        </Link>

        <Link to="activity" className="Link White">
          <AddEntery
            imgsrc={<AccessTimeOutlinedIcon className="icon" />}
            imgtitle="Activity"
          />
        </Link>
        <Link to="health" className="Link White">
          <AddEntery
            imgsrc={<LocalHospitalOutlinedIcon className="icon" />}
            imgtitle="Health"
          />
        </Link>
        <Link to="temperature" className="Link White">
          <AddEntery
            imgsrc={<ThermostatAutoOutlinedIcon className="icon" />}
            imgtitle="Temperature"
          />
        </Link>
        <Link to="fluids" className="Link White">
          <AddEntery
            imgsrc={<WidgetsOutlinedIcon className="icon" />}
            imgtitle="Fluids"
          />
        </Link>

        <Link to="food" className="Link White">
          <AddEntery
            imgsrc={<SetMealOutlinedIcon className="icon" />}
            imgtitle="Food"
          />
        </Link>
        <Link to="sleep" className="Link White">
          <AddEntery
            imgsrc={<BedtimeOutlinedIcon className="icon" />}
            imgtitle="Sleep"
          />
        </Link>
      </div>
      <div className="r-one">
        <Link to="toilet" className="Link White">
          <AddEntery
            imgsrc={<ShowerOutlinedIcon className="icon" />}
            imgtitle="Toilet"
          />
        </Link>

        <Link to="moods" className="Link White">
          <AddEntery
            imgsrc={<SentimentDissatisfiedOutlinedIcon className="icon" />}
            imgtitle="Mood"
          />
        </Link>

        <Link to="supplies" className="Link White">
          <AddEntery
            imgsrc={<BlenderOutlinedIcon className="icon" />}
            imgtitle="Supplies"
          />
        </Link>

        <Link to="notes" className="Link White">
          <AddEntery
            imgsrc={<DescriptionOutlinedIcon className="icon" />}
            imgtitle="Notes"
          />
        </Link>
         <Link to="nametoface" className="Link White">
        <AddEntery
          imgsrc={<WcOutlinedIcon className="icon" />}
          imgtitle="Name to Face"
        />
        </Link>
        <AddEntery
          imgsrc={<SensorDoorOutlinedIcon className="icon" />}
          imgtitle="Move rooms"
        />
        <Link to="checkout" className="Link White">
          <AddEntery
            imgsrc={<ArrowCircleRightOutlinedIcon className="icon" />}
            imgtitle="Check out"
          />
        </Link>
      </div>
    </div>
  );
}
function ApplyToSection() {
  return (
    <div style={{ padding: "0 20px", backgroundColor: "white" }}>
      <div className="apply-header">
        <div>
          <h2>Apply to</h2>
        </div>
        <div className="select-all">
          <Button>Select All</Button>
        </div>
      </div>

      <div className="jane">
        <div className="img-cirle">
          <div>
            <img src={img} />
          </div>
          <div>
            <h4 className="D">Jane D</h4>
          </div>
        </div>
        <div className="girl-svg">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1667 29.3333C22.9907 29.3333 29.3333 22.9907 29.3333 15.1667C29.3333 7.34263 22.9907 1 15.1667 1C7.34263 1 1 7.34263 1 15.1667C1 22.9907 7.34263 29.3333 15.1667 29.3333Z"
              stroke="#00AEEF"
              stroke-width="2"
            />
            <path
              d="M9.5 12.0417L15.1667 17.7084L20.8333 12.0417"
              stroke="#00AEEF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
const ClassroomActionsComponent = () => {
  return (
    <>
      <NavOptions />
      <ApplyToSection />
      <Outlet />
    </>
  );
};

export default ClassroomActionsComponent;
