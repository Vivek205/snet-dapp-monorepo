import React, { useState } from "react";

import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useStyles } from "./styles";

const Past = ({ classes }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      question: "question 1",
      answer: "answer 1",
    },
    {
      question: "question 2",
      answer: "answer 2",
    },
    {
      question: "question 3",
      answer: "answer 3",
    },
    {
      question: "question 4",
      answer: "answer 4",
    },
    {
      question: "question 5",
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
            <Typography className={classes.question}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.answer}>{item.answer}</div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default withStyles(useStyles)(Past);
