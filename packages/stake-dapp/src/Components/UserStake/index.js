import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

import { useStyles } from "./styles";
import StakeSession from "../StakeSession";

import { sortByCategories, cardDetails, incubationProgressDetails } from "./content";

import StyledDropdown from "shared/dist/components/StyledDropdown";
import { stakeActions } from "../../Services/Redux/actionCreators";

const UserStake = ({ incubatingCount }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { incubationStakes } = useSelector(state => state.stakeReducer);
  const { metamaskDetails } = useSelector(state => state.metamaskReducer);

  //const [alert, setAlert] = useState({ 0: { type: "Error", message: "Test Error Message" } });

  useEffect(() => {
    try {
      // TODO: Convert the same to async Constant based on the need...
      dispatch(stakeActions.fetchActiveStakes(metamaskDetails));
    } catch (_error) {
      //console.log("error - ", error);
      // TODO - Need to handle the error based on overall Web App
    }
  }, [dispatch, metamaskDetails]);

  //console.log("incubationStakes - ", incubationStakes);
  //console.log("incubationStakes length - ", incubationStakes.length);

  if (incubationStakes.length === 0) {
    // TODO - Need to handle the No Data Found Here as per the Invision App Designs
    return null;
  }

  return (
    <Grid container className={classes.userStakeContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.toolBar}>
        <div className={classes.sortBySection}>
          <span className={classes.sortbyTxt}>Sort by:</span>
          <StyledDropdown list={sortByCategories} labelTxt="select" />
        </div>
        <div className={classes.incubatingCount}>
          <Typography>{incubatingCount} incubating</Typography>
        </div>
      </Grid>

      {incubationStakes.map(stake => (
        <Grid key={stake.stakeMapIndex} item xs={12} sm={12} md={12} lg={12}>
          <StakeSession
            incubationProgressDetails={incubationProgressDetails(stake)}
            cardDetails={cardDetails(stake)}
            stakeStartDate={moment.unix(stake.startPeriod).format("MMM YYYY")}
            stakeMapIndex={stake.stakeMapIndex}
          />
        </Grid>
      ))}

      {/* <Grid item xs={12} sm={12} md={12} lg={12} className={classes.bottomBox}>
        <StakeSession
          incubationProgressDetails={secondIncubationProgressDetails}
          cardDetails={secondCardDetails}
          date="Dec 2019"
          id="#9283"
        />
      </Grid> */}
    </Grid>
  );
};

export default UserStake;
