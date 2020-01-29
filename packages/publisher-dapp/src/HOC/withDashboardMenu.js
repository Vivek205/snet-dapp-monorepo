import React from "react";
import Grid from "@material-ui/core/Grid";

import SNETFooter from "shared/dist/components/SNETFooter";
import VerticalTabs from "shared/dist/components/VerticalTabs";
import { upperTabs, lowerTabs } from "./content";
import Header from "../Components/Header";

const withDashboardMenu = Component => {
  return props => (
    <div>
      <Header />
      <Grid container spacing={24}>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <VerticalTabs upperTabs={upperTabs} lowerTabs={lowerTabs} />
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <Component {...props} />
        </Grid>
      </Grid>
      <SNETFooter />
    </div>
  );
};

export default withDashboardMenu;
