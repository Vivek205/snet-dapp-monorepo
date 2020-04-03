import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PageNotFoundImage from "shared/dist/assets/images/pageNotFound.png";
import SNETStatusBanner from "shared/dist/components/SNETStatusBanner";
import { initSDK } from "shared/dist/utils/snetSdk";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import { GlobalRoutes } from "../GlobalRouter/Routes";
import { useDispatch } from "react-redux";
import { loaderActions } from "../Services/Redux/actionCreators";
import { loginActions } from "../Services/Redux/actionCreators/userActions";

const ConnectMetamask = () => {
  const [alert, setAlert] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loaderActions.stopAppLoader());
  });

  const handleConnectMM = async () => {
    try {
      await initSDK();
      dispatch(loginActions.setIsMMConnected(true));
      history.push(GlobalRoutes.LOGIN.path);
    } catch (e) {
      setAlert({
        type: alertTypes.ERROR,
        message: "Unable to connect Metamask. Please make sure you have added metamask extension and logged in with it",
      });
    }
  };

  return (
    <div>
      <SNETStatusBanner
        title="Unable to initialize application!"
        img={PageNotFoundImage}
        description="Metamask is required to initialize the application. Please connect Metamask and login"
        actions={[
          { children: "Connect Metamask", variant: "contained", color: "primary", onClick: handleConnectMM },
          {
            children: "contact support",
            variant: "contained",
            color: "primary",
            href: `mailto:${process.env.REACT_APP_SNET_SUPPORT_MAIL}`,
          },
        ]}
      />
      <AlertBox type={alert.type} message={alert.message} />
    </div>
  );
};

export default ConnectMetamask;
