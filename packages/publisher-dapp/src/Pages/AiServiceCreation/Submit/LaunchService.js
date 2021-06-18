import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useParams } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";

import SNETStatusBanner, { statusTitleType } from "shared/dist/components/SNETStatusBanner";
import VerificationPending from "shared/dist/assets/images/VerificationPending.png";
import VerificationFailed from "shared/dist/assets/images/VerificationFailed.png";
import VerificationApproved from "shared/dist/assets/images/VerificationApproved.png";
import { progressStatus, sections } from "../constant";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";

const selectState = state => ({
  serviceStatus: state.aiServiceDetails.progressStages,
  aiServiceDetails: state.aiServiceDetails,
});

const LaunchService = ({ classes, handleBackToDashboard, handleSubmit }) => {
  const [isLaunchable, setLaunchable] = useState(false);
  const [serviceInfo, setServiceInfo] = useState({});

  const { progressStages, orgId } = useSelector(state => state.aiServiceDetails);

  const { orgUuid, serviceUuid } = useParams();

  const dispatch = useDispatch();

  const checkServiceStatus = async () => {
    const { assets } = await dispatch(aiServiceDetailsActions.getServiceDetails(orgUuid, serviceUuid, orgId));

    const demoFileBuildStatus = assets.demoFiles.status?.toLowerCase() || progressStatus.IN_PROGRESS;
    const protoFileBuildStatus = assets.protoFiles.status?.toLowerCase() || progressStatus.IN_PROGRESS;

    let serviceStatusSection = {};

    if (demoFileBuildStatus === progressStatus.SUCCEEDED && protoFileBuildStatus === progressStatus.SUCCEEDED) {
      setLaunchable(true);

      serviceStatusSection = {
        title: "Ready to Launch",
        description:
          "The final launch will require you to be logged into your Metamask with some ETH available to activate the service. Only the owner of the organization can launch the service. Once you launch the service, it will take some for your changes to be reflected on AI Marketplace.",
        image: VerificationApproved,
      };
    } else {
      serviceStatusSection = {
        title: "Unable to Publish the Service",
        description:
          "We were unable to publish the service. Please check all the appropriate fields are filled and try publishing again.",
        image: VerificationFailed,
      };
    }

    setServiceInfo(serviceStatusSection);
  };

  useEffect(() => {
    checkServiceStatus();
  }, []);

  return (
    <div className={classes.statusBannerContainer}>
      <SNETStatusBanner
        title={serviceInfo.title}
        img={serviceInfo.image || VerificationPending}
        description={serviceInfo.description}
        actions={[
          {
            children: "launch ai service",
            variant: "contained",
            color: "primary",
            onClick: handleSubmit,
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
