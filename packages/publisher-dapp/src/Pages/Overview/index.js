import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import GetInTouch from "./GetInTouch";
import OverviewArticle from "./OverviewArticle";
import { overViewArticles } from "./content";
import { useSelector } from "react-redux";
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const selectState = state => ({
  isLoggedIn: state.user.isLoggedIn,
  orgUuid: state.organization.uuid,
  publisherTnC: state.user.publisherTnC,
});

const Overview = ({ classes, history }) => {
  const { isLoggedIn, orgUuid, publisherTnC } = useSelector(selectState);

  useEffect(() => {
    if (isLoggedIn && (orgUuid || publisherTnC.accepted)) {
      history.push(GlobalRoutes.ONBOARDING.path);
    }
  }, [history, isLoggedIn, orgUuid, publisherTnC]);

  return (
    <Grid container className={classes.overiewMainContainer}>
      {overViewArticles.map((item, index) => (
        <OverviewArticle
          key={item.title}
          title={item.title}
          description={item.description}
          list={item.list}
          media={item.media}
          btnDetails={item.btnDetails}
          rightAlign={(index + 1) % 2 === 0}
        />
      ))}
      <GetInTouch />
    </Grid>
  );
};

export default withStyles(useStyles)(Overview);
