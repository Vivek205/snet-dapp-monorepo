import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import moment from "moment";

import { useStyles } from "./styles";
import StakeSession from "../StakeSession";

import { cardDetails, incubationProgressDetails } from "./content";

import { stakeActions } from "../../Services/Redux/actionCreators";

const UserStake = () => {
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
    </Grid>
  );
};

export default UserStake;
