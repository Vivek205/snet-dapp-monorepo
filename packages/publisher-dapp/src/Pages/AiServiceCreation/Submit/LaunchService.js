import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import isNil from "lodash/isNil";

import { useStyles } from "./styles";

import SNETStatusBanner, { statusTitleType } from "shared/dist/components/SNETStatusBanner";
import VerificationPending from "shared/dist/assets/images/VerificationPending.png";
import VerificationFailed from "shared/dist/assets/images/VerificationFailed.png";
import VerificationApproved from "shared/dist/assets/images/VerificationApproved.png";
import { progressStatus, sections } from "../constant";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";

const LaunchService = ({ classes, handleBackToDashboard, handleSubmit }) => {
  const [isLaunchable, setLaunchable] = useState(false);
  const [serviceInfo, setServiceInfo] = useState({
    title: "Unable to Publish the Service",
    description:
      "We were unable to publish the service. Please check all the appropriate fields are filled and try publishing again.",
    image: VerificationPending,
  });

  const { orgId, progressStages } = useSelector(state => state.aiServiceDetails);

  const { orgUuid, serviceUuid } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const checkServiceStatus = async () => {
      const { assets } = await dispatch(aiServiceDetailsActions.getServiceDetails(orgUuid, serviceUuid, orgId));

      const demoFileBuildStatus = assets.demoFiles.status?.toLowerCase();
      const protoFileBuildStatus = assets.protoFiles.status?.toLowerCase();

      if (isNil(demoFileBuildStatus) || isNil(protoFileBuildStatus)) {
        dispatch(aiServiceDetailsActions.updateProgressStatus(sections.LAUNCH, progressStatus.FAILED, progressStages));
      }

      let serviceStatusSection = {};

      if (demoFileBuildStatus === progressStatus.SUCCEEDED && protoFileBuildStatus === progressStatus.SUCCEEDED) {
        setLaunchable(true);

        serviceStatusSection = {
          title: "Ready to Launch",
          description:
            "The final launch will require you to be logged into your Metamask with some ETH available to activate the service. Only the owner of the organization can launch the service. Once you launch the service, it will take sometime for your changes to be reflected on AI Marketplace.",
          image: VerificationApproved,
        };
      } else if (demoFileBuildStatus === progressStatus.PENDING) {
        serviceStatusSection = {
          title: "Unable to Publish the Service",
          description: "Component build is in Progress..., please check back after sometime",
          image: VerificationPending,
        };
      } else if (protoFileBuildStatus === progressStatus.PENDING) {
        serviceStatusSection = {
          title: "Unable to Publish the Service",
          description: "Proto compilation is in progress... please check back after sometime",
          image: VerificationPending,
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
    checkServiceStatus();
  }, [dispatch, orgId, orgUuid, progressStages, serviceUuid]);

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
