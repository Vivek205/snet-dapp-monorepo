import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Modal from "@material-ui/core/Modal";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { useStyles } from "./styles";

export const SNETLoader = ({ isLoading, title, content }) => {
  const classes = useStyles();

  return (
    <Modal disableBackdropClick open={isLoading}>
      <Card className={classes.card}>
        <CardHeader title={<h2>{title}</h2>} />
        <Divider />
        <div className={classes.circularProgressContainer}>
          <CircularProgress className={classes.circularProgress} />
        </div>
        <CardContent>
          <Typography variant="body2" component="p">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
};

SNETLoader.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default SNETLoader;
