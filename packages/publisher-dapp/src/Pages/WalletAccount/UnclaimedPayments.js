import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import WarningIcon from "@material-ui/icons/Warning";
// import SNETPagination from "shared/dist/components/SNETPagination";
// import { itemsPerPageOptions } from "./content";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import SNETButton from "shared/src/components/SNETButton";

//handleClaimChannel
const UnclaimedPayments = ({ classes, payments, handleClaimChannel }) => {
  return (
    <div className={classes.table}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableCol}>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Typography>Channel Id</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Typography>Channel Nonce</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Typography>Signed Amount</Typography>
        </Grid>{" "}
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Typography>Action</Typography>
        </Grid>
      </Grid>
      {payments.map(payment => (
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableRow} key={payment.channelId}>
          {/* <Grid item xs={12} sm={12} md={4} lg={4}>
            <FormControlLabel control={<Checkbox color="primary" />} label="User Identifier 1" />
          </Grid>*/}
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <FormControlLabel control={<Checkbox color="primary" />} label={payment.channelId} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <WarningIcon className={classes.warningIcon} />
            <Typography>{payment.channelNonce}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography>{payment.signedAmount}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography>
              <SNETButton
                color="primary"
                variant="contained"
                children="Claim channel"
                onClick={() =>
                  handleClaimChannel(payment.channelId, payment.channelNonce, payment.signedAmount, payment.signature)
                }
              />
            </Typography>
          </Grid>
        </Grid>
      ))}

      {/* <Grid item xs={12} sm={12} md={12} lg={12} className={classes.styledPagination}>
        <SNETPagination
          itemsPerPageOptions={itemsPerPageOptions}
          itemsPerPage={limit}
          onItemsPerPageChange={this.onItemsPerPageChange}
          limit={limit}
          offset={offset}
          totalCount={totalCount}
          onPageChange={this.handlePageChange}
        />
      </Grid>*/}
    </div>
  );
};

export default withStyles(useStyles)(UnclaimedPayments);
