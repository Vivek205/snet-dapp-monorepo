import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";

import { useStyles } from "./styles";
import GridViewItem from "./GridViewItem";
import ServiceStatusDetails from "./ServiceStatusDetails";
import NoServicesFound from "./NoServicesFound";
import LoadingAiServices from "./LoadingAiServices";
import { ServiceCreationRoutes } from "../../../AiServiceCreation/ServiceCreationRouter/Routes";

const CardGroup = () => {
  const classes = useStyles();
  const { isLoading, serviceList } = useSelector(state => ({
    isLoading: state.loader.aiServiceList.isLoading,
    serviceList: state.aiServiceList.data,
  }));
  const { orgUuid } = useParams();
  const [isAvailable] = useState(true);

  if (isLoading) {
    return <LoadingAiServices />;
  }

  if (isEmpty(serviceList)) {
    return <NoServicesFound />;
  }

  return serviceList.map(service => (
    <Grid container className={classes.gridViewCardCollection} key={service.uuid}>
      <Grid item xs={12} sm={12} md={3} lg={3} className={classes.serviceDetailCard}>
        <Link
          to={ServiceCreationRoutes.PROFILE.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", service.uuid)}
          className={classes.routerLink}
        >
          <GridViewItem
            cardTitle={service.displayName}
            cardSubheader="sub header"
            ratingGiven={service.rating.rating}
            totalRating={service.rating.totalUsersRated}
            cardDescription={service.shortDescription}
            isAvailable={isAvailable}
          />
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={9} className={classes.serviceStatusDetails}>
        <ServiceStatusDetails status={service.state} groups={service.groups} />
      </Grid>
    </Grid>
  ));
};

export default CardGroup;
