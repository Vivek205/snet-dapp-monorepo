import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useStyles } from "./styles";

const FAQAccordion = ({ classes, question, answer, index }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ExpansionPanel expanded={expanded === index} onChange={handleChange(index)} className={classes.expansionPanel}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.panelSummary}>
        <Typography className={classes.question}>{question}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className={classes.answer}>{answer}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default withStyles(useStyles)(FAQAccordion);
