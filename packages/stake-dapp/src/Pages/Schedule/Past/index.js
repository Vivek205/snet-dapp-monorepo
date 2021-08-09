import React, { useState } from "react";
import { useSelector } from "react-redux";
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
import InlineLoader from "../../../Components/InlineLoader";

const stateSelector = state => ({
  isLoading: state.loader.txnList.isLoading,
});

const Past = ({ classes, pasSessiontData }) => {
  const [expanded, setExpanded] = useState(false);
  const { isLoading } = useSelector(state => stateSelector(state));

  const handleChange = panel => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (isLoading) {
    return <InlineLoader />;
  }

  return (
    <div className={classes.accordionContainer}>
      {pasSessiontData
        ? pasSessiontData.map((pastSessions, index) => (
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
                  Stake Session #{pastSessions.window_id}
                  <span> {moment.unix(pastSessions.start_period).format("MMM YYYY")}</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.tabContent}>
                  <div>
                    <p>
                      <ErrorIcon />
                      Opened Date
                    </p>
                    <p>{moment.unix(pastSessions.start_period).format("DD MMM YYYY")}</p>
                  </div>
                  <div>
                    <p>
                      <ErrorIcon />
                      Closed Date
                    </p>
                    <p>{moment.unix(pastSessions.end_period).format("DD MMM YYYY")}</p>
                  </div>
                  <div>
                    <p>
                      <ErrorIcon />
                      Stakers
                    </p>
                    <p>
                      {pastSessions.no_of_stakers}
                      <span>people</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <ErrorIcon />
                      Final Pool Size
                    </p>
                    <p>
                      {pastSessions.total_stake}
                      <span>AGIX</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <ErrorIcon />
                      Reward Pool
                    </p>
                    <p>
                      {pastSessions.window_reward_amount}
                      <span>AGIX</span>
                    </p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          ))
        : null}
    </div>
  );
};

export default withStyles(useStyles)(Past);
