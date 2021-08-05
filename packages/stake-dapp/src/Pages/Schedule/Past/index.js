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

const Past = ({ classes }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      window_id: 15,
      question: 1628413200,
      answer: {
        start_date: 1628413201,
        end_date: 1628413208,
        stakers: 1400,
        final_pool_size: 111290964,
        reward_pool: 111290964,
      },
    },
    {
      window_id: 14,
      question: 1628413200,
      answer: {
        start_date: 1628413201,
        end_date: 1628413208,
        stakers: 1400,
        final_pool_size: 111290964,
        reward_pool: 111290964,
      },
    },
    {
      window_id: 13,
      question: 1628413200,
      answer: {
        start_date: 1628413201,
        end_date: 1628413208,
        stakers: 1400,
        final_pool_size: 111290964,
        reward_pool: 111290964,
      },
    },
    {
      window_id: 12,
      question: 1628413200,
      answer: {
        start_date: 1628413201,
        end_date: 1628413208,
        stakers: 1400,
        final_pool_size: 111290964,
        reward_pool: 111290964,
      },
    },
    {
      window_id: 11,
      question: 1628413200,
      answer: {
        start_date: 1628413201,
        end_date: 1628413208,
        stakers: 1400,
        final_pool_size: 111290964,
        reward_pool: 111290964,
      },
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
            <Typography className={classes.tabTitle}>
              Stake Session #{item.window_id}
              <span> {moment.unix(item.question).format("MM YYYY")}</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.tabContent}>
              <div>
                <p>
                  <ErrorIcon />
                  Opened Date
                </p>
                <p>{moment.unix(item.answer.start_date).format("DD MMM YYYY")}</p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Closed Date
                </p>
                <p>{moment.unix(item.answer.end_date).format("DD MMM YYYY")}</p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Stakers
                </p>
                <p>
                  {item.answer.stakers}
                  <span>people</span>
                </p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Final Pool Size
                </p>
                <p>
                  {item.answer.final_pool_size}
                  <span>AGIX</span>
                </p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Reward Pool
                </p>
                <p>
                  {item.answer.reward_pool}
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
