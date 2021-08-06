import React, { useState } from "react";
import moment from "moment";

import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ErrorIcon from "@material-ui/icons/Error";

import { useStyles } from "./styles";

const Past = ({ classes, pasSessiontData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.accordionContainer}>
      {pasSessiontData.map((pastSessions, index) => (
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
            <Typography className={classes.tabTitle}>
              Stake Session #{pastSessions.stakeMapIndex}
              <span> {moment.unix(pastSessions.startPeriod).format("MMM YYYY")}</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.tabContent}>
              <div>
                <p>
                  <ErrorIcon />
                  Opened Date
                </p>
                <p>{moment.unix(pastSessions.startPeriod).format("DD MMM YYYY")}</p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Closed Date
                </p>
                <p>{moment.unix(pastSessions.endPeriod).format("DD MMM YYYY")}</p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Stakers
                </p>
                <p>
                  {pastSessions.numOfStakers}
                  <span>people</span>
                </p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Final Pool Size
                </p>
                <p>
                  {pastSessions.windowTotalStake}
                  <span>AGIX</span>
                </p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Reward Pool
                </p>
                <p>
                  {pastSessions.rewardAmount}
                  <span>AGIX</span>
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
