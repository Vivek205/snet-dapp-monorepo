import React, { useState } from "react";

import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ErrorIcon from "@material-ui/icons/Error";

import { useStyles } from "./styles";

const Past = ({ classes }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      question: "Stake Session #14 Jun 2021",
      answer: "answer 1",
    },
    {
      question: "Stake Session #14 Jun 2021",
      answer: "answer 2",
    },
    {
      question: "Stake Session #14 Jun 2021",
      answer: "answer 3",
    },
    {
      question: "Stake Session #14 Jun 2021",
      answer: "answer 4",
    },
    {
      question: "Stake Session #14 Jun 2021",
      answer: "answer 5",
    },
  ];

  return (
    <div className={classes.accordionContainer}>
      {data.map((item, index) => (
        <Accordion
          expanded={expanded === index}
          onChange={handleChange(index)}
          className={classes.expansionPanel}
          key={index}
        >
          <AccordionSummary
            expandIcon={expanded === index ? <RemoveIcon /> : <AddIcon />}
            className={classes.panelSummary}
          >
            <Typography className={classes.tabTitle}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.tabContent}>
              <div>
                <p>
                  <ErrorIcon />
                  Opened Date
                </p>
                <p>5 jan 2020</p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Closed Date
                </p>
                <p>5 jan 2020</p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Stakers
                </p>
                <p>
                  1400<span>people</span>
                </p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Final Pool Size
                </p>
                <p>
                  111,290,965<span>agix</span>
                </p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Reward Pool
                </p>
                <p>
                  111,290,965<span>agix</span>
                </p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default withStyles(useStyles)(Past);
