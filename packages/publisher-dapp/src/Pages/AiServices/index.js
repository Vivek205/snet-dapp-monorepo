import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import isEqual from "lodash/isEqual";

import SNETButton from "shared/dist/components/SNETButton";
import ServiceImage from "shared/dist/assets/images/services.png";
import CreateNewServicePopup from "./CreateNewServicePopup";
import ServiceCollection from "./ServiceCollection";
import { useStyles } from "./styles";
import { aiServiceListActions } from "../../Services/Redux/actionCreators";

class AiServices extends Component {
  state = {
    showPopUp: false,
  };

  handleCreateService = () => {
    this.setState({ showPopUp: true });
  };

  handleClosePopup = () => {
    this.setState({ showPopUp: true });
  };

  componentDidMount = async () => {
    const { orgUuid, pagination, getAiServiceList } = this.props;
    await getAiServiceList(orgUuid, pagination);
  };

  componentDidUpdate = async prevProps => {
    const { orgUuid, pagination, getAiServiceList } = this.props;
    if (isEqual(prevProps.pagination, pagination)) {
      return;
    }
    await getAiServiceList(orgUuid, pagination);
  };

  render() {
    const { classes } = this.props;
    const { showPopUp } = this.state;

    return (
      <div className={classes.AiServicesMainContainer}>
        <Grid container spacing={24} className={classes.topSectionCotainer}>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.descriptionContainer}>
            <Grid item xs={12} sm={7} md={7} lg={7} className={classes.content}>
              <div>
                <Typography variant="h3" className={classes.descriptionTitle}>
                  My AI Apps
                </Typography>
                <Typography variant="h5" className={classes.description}>
                  With this pubilsher portal, you can publish and manage yourAI services. You will be able to edit your
                  services, demos, and tutorial content.
                </Typography>
              </div>
              <div className={classes.btnContainer}>
                <SNETButton color="primary" children="create new ai service" variant="contained" />
                <SNETButton color="primary" variant="text" children="view documentation" />
              </div>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} className={classes.media}>
              <img src={ServiceImage} alt="Services" />
            </Grid>
          </Grid>
          <ServiceCollection />
        </Grid>
        <CreateNewServicePopup open={showPopUp} handleClose={this.handleClosePopup} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orgUuid: state.organization.uuid,
  pagination: state.aiServiceList.pagination,
});

const mapDispatchToProps = dispatch => ({
  getAiServiceList: (orgUuid, pagination) => dispatch(aiServiceListActions.getAiServiceList(orgUuid, pagination)),
});

export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(AiServices));
