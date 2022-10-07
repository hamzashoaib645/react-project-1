import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function Dropdown(props) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      {/* <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          aria-expanded='true'
        >
          <Typography> {props.heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.about}</Typography>
        </AccordionDetails>
      </Accordion> */}
    </>
  );
}

export default Dropdown;
