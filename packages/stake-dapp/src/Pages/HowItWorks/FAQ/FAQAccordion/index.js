import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useStyles } from "./styles";
import { questionAnswers } from "./content";

const FAQAccordion = ({ classes }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => isExpanded => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.accordionContainer}>
      {questionAnswers.map((item, index) => (
        <ExpansionPanel expanded={expanded === index} onChange={handleChange(index)} key={item.question}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.panelSummary}>
            <Typography className={classes.question}>{item.question}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.answer}>{item.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default withStyles(useStyles)(FAQAccordion);
