import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import WarningIcon from "@material-ui/icons/Warning";
import SNETPagination from "shared/dist/components/SNETPagination";
import { itemsPerPageOptions } from "./content";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import { cogsToAgi } from "shared/dist/utils/Pricing";

const UnclaimedPayments = ({
  classes,
  payments,
  // handleClaimChannel,
  pagination,
  handlePageChange,
  onItemsPerPageChange,
  selectedChannels,
  onSelectChannel,
}) => {
  const { limit, offset, totalCount, itemsPerPage } = pagination;

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
        </Grid>
        {/*      <Grid item xs={12} sm={12} md={2} lg={2}>
          <Typography>Action</Typography>
        </Grid>*/}
      </Grid>
      {payments.map(payment => (
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableRow} key={payment.channelId}>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  value={payment.channelId}
                  checked={selectedChannels[payment.channelId]}
                  onChange={onSelectChannel}
                />
              }
              label={payment.channelId}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <WarningIcon className={classes.warningIcon} />
            <Typography>{payment.channelNonce}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography>{cogsToAgi(payment.signedAmount)} AGIX</Typography>
          </Grid>
        </Grid>
      ))}

      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.styledPagination}>
        <SNETPagination
          itemsPerPageOptions={itemsPerPageOptions}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          limit={limit}
          offset={offset}
          totalCount={totalCount}
          onPageChange={handlePageChange}
        />
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(UnclaimedPayments);
