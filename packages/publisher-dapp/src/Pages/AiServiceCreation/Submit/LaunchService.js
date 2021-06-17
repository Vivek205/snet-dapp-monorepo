import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";

import SNETStatusBanner, { statusTitleType } from "shared/dist/components/SNETStatusBanner";
import VerificationPending from "shared/dist/assets/images/VerificationPending.png";
import VerificationFailed from "shared/dist/assets/images/VerificationFailed.png";
import VerificationApproved from "shared/dist/assets/images/VerificationApproved.png";
import { progressStatus } from "../constant";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";

const selectState = state => ({
  serviceStatus: state.aiServiceDetails.progressStages,
});

const LaunchService = ({ classes, handleBackToDashboard }) => {
  const [isLaunchable] = useState(false);
  const [serviceInfo, setServiceInfo] = useState({});

  const { serviceStatus } = useSelector(selectState);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkServiceStatus = () => {
      let serviceStatusSection = {};

      for (const service of serviceStatus) {
        const { status } = service;
        if (status === progressStatus.SUCCESS) {
          serviceStatusSection = {
            title: "Ready to Launch",
            description: "Please proceed to launch to complete the final step",
            image: VerificationApproved,
            status,
          };
        } else if (status === progressStatus.FAILED) {
          serviceStatusSection = {
            title: "Unable to Publish the Service",
            description:
              "We were unable to publish the service. Please check all the appropriate fields are filled and try publishing again.",
            image: VerificationFailed,
            status,
          };
          break;
        } else {
          serviceStatusSection = {
            title: "Unable to Publish the Service",
            description:
              "We were unable to publish the service. Please check all the appropriate fields are filled and try publishing again.",
            image: VerificationPending,
            status: progressStatus.PENDING,
          };
          break;
        }
      }
      setServiceInfo(serviceStatusSection);
      // TODO: Check the build status is success / not from API
      dispatch(aiServiceDetailsActions.updateProgressStatus(4, serviceStatusSection.status, serviceStatus));
    };

    checkServiceStatus();
  }, [dispatch, serviceStatus]);

  return (
    <div className={classes.statusBannerContainer}>
      <SNETStatusBanner
        title={serviceInfo.title}
        img={serviceInfo.image}
        description={serviceInfo.description}
        actions={[
          {
            children: "launch ai service",
            variant: "contained",
            color: "primary",
            onClick: handleBackToDashboard,
            disabled: !isLaunchable,
          },
          { children: "back to dashboard", variant: "outlined", color: "primary", onClick: handleBackToDashboard },
        ]}
        type={statusTitleType.PENDING}
      />
    </div>
  );
};

export default withStyles(useStyles)(LaunchService);
