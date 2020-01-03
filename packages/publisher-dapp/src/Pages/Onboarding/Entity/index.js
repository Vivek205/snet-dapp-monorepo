import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { emailPreferencesList } from "./content";
import SNETButton from "shared/src/components/SNETButton";
import StyledDropdown from "shared/dist/components/StyledDropdown";
import { useStyles } from "./styles";
import { OnboardingRoutes } from "../OnboardingRouter/Routes";
import { userEntities } from "../../../Utils/user";
import { useDispatch, useSelector } from "react-redux";
import { onboardingActions } from "../../../Services/Redux/actionCreators/userActions";

const Entity = ({ classes, history }) => {
  const entity = useSelector(state => state.user.entity);
  const dispatch = useDispatch();
  const handleContinue = () => {
    history.push(OnboardingRoutes.TNC.path);
  };

  const handleEntityChange = event => {
    dispatch(onboardingActions.setUserEntity(event.target.value));
  };

  return (
    <Grid container className={classes.entityContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h5">Entity Type</Typography>
        <Typography className={classes.entityDescription}>
          You will be able to choose publish and developed as Company Organization, Indivdual / Sole Proprietor / Single
          Person Business or join an existing approved entity with an invitation. The first two options require certain
          amount of information to proceed.
        </Typography>
        <StyledDropdown
          labelTxt="Please Select"
          inputLabel="Entity Type"
          value={entity}
          list={[
            { value: userEntities.ORGANIZATION, label: userEntities.ORGANIZATION },
            { value: userEntities.INDIVIDUAL, label: userEntities.INDIVIDUAL },
          ]}
          onChange={handleEntityChange}
        />
      </Grid>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h5">Sign In</Typography>
        <Grid item sx={12} sm={12} md={12} lg={12} className={classes.signInContent}>
          <Grid item sx={12} sm={4} md={4} lg={4} className={classes.signInMedia}>
            <img src="http://placehold.it/150x150" alt="Sign In" />
          </Grid>
          <Grid item sx={12} sm={8} md={8} lg={8} className={classes.signInRightContent}>
            <Typography className={classes.signInSubtitle}>
              Please Login or Signup into Singularitynet to use the portal.
            </Typography>
            <Typography className={classes.signInDescription}>
              To use the portal, please sign up. Lorem ipsum dolor sit amet, per odio adipi scing ea, est an purto
              libris fastidii, dolor laboramus consectetuer ut eum. An debet expetendis scriptorem ius. Dolorem detracto
              accusamus mea cu. Nam hendrerit theophrastus ex, vix aeque solet cu.
            </Typography>
            <div className={classes.signInBtns}>
              <SNETButton color="primary" children="Login to singularitynet" variant="text" />
              <SNETButton color="primary" children="Create new account" variant="text" />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h5">Email Preferences</Typography>
        <div className={classes.checkboxContainer}>
          {emailPreferencesList.map((item, index) => (
            <FormControlLabel control={<Checkbox value={item} color="primary" />} label={item} />
          ))}
        </div>
      </Grid>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
        <SNETButton color="primary" children="cancel" variant="text" />
        <SNETButton color="transparent" children="continue" variant="contained" onClick={handleContinue} />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(Entity);
