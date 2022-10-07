import React from "react";
import "./planner.css";

const Planner = () => {
  return (
    <>
      <div className="section-1">
        <h3 className="journal"> Activity Planner</h3>

        <p className="activi">
          The Lesson Planner allows you to plan your classroom activities for
          the week.Attach development skills to entries and easily import them
          into reports! <br /> Tap the button to get started:
        </p>
        <div className="BTN">
          <button>Create Calendar</button>
        </div>
      </div>
    </>
  );
};

export default Planner;
