import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DoneIcon from "@material-ui/icons/Done";
import HourGlassIcon from "@material-ui/icons/HourglassEmpty";
import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import { serviceCreationStatus, serviceData } from "../../../constant";
import { useStyles } from "../styles";

import AlertBox from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";

const ContinueLaunchTable = ({ classes, serviceDetails, handlePublishToBlockchain }) => {
  return (
    <Fragment>
      <Grid container className={classes.table}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableColumn}>
          <Grid item xs={12} sm={3} md={4} lg={4}>
            <Typography className={classes.th}>status</Typography>
          </Grid>
          <Grid item xs={12} sm={7} md={6} lg={6}>
            <Typography className={classes.th}>feedback</Typography>
          </Grid>
          <Grid item xs={12} sm={1} md={2} lg={2}>
            <Typography className={classes.th}>actions</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableData}>
          <Grid item xs={12} sm={3} md={4} lg={4}>
            <Typography className={classes.mobileTH}>status:</Typography>
            <div>
              <DoneIcon className={classes.tickIcon} />
              <Typography className={classes.td}>Submitted For Review</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={7} md={6} lg={6}>
            <Typography className={classes.mobileTH}>feedback:</Typography>
            <Typography className={classes.td}>Submitted Mar 15, 2019 at 5:45PM by Greg Kuebler</Typography>
          </Grid>
          <Grid item xs={12} sm={1} md={2} lg={2} className={classes.actionsColumn}>
            <Typography className={classes.mobileTH}>actions:</Typography>
            <ArrowDownIcon className={classes.downCaretIcon} />
          </Grid>
        </Grid>
        {serviceData.map(data => (
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableData} key={data.status}>
            <Grid item xs={12} sm={3} md={4} lg={4}>
              <Typography className={classes.mobileTH}>status:</Typography>
              <div>
                <HourGlassIcon className={classes.hourglassIcon} />
                <Typography className={classes.td}>{data.status}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={7} md={6} lg={6}>
              <Typography className={classes.mobileTH}>feedback:</Typography>
              <Typography className={classes.td}>-</Typography>
            </Grid>
            <Grid item xs={12} sm={1} md={2} lg={2} className={classes.actionsColumn}>
              <Typography className={classes.mobileTH}>actions:</Typography>
              <ArrowDownIcon className={classes.downCaretIcon} />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <div className={classes.alertBoxBtnContainer}>
        <AlertBox type="warning" message="Review in Progress" />
        <SNETButton
          color="primary"
          variant="contained"
          disabled={serviceDetails.serviceState.state === serviceCreationStatus.APPROVAL_PENDING}
          onClick={handlePublishToBlockchain}
          children="Continue to Launch"
        />
      </div>
    </Fragment>
  );
};

export default withStyles(useStyles)(ContinueLaunchTable);
