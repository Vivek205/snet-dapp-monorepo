import React, { Fragment } from "react";
import SNETFooter from "shared/dist/components/SNETFooter";
import { localStorageKeys, useLocalStorage } from "shared/dist/hooks/useLocalStorage";
import { FooterData } from "./footerContent";
import Header from "../Components/Header";
import Box from "@material-ui/core/Box";
import { useStyles } from "./styles";

const withLightHeaderAndFooter = Component => {
  return props => {
    const classes = useStyles();
    const [showUpdateNotification, setShowUpdateNotificationBar] = useLocalStorage(
      localStorageKeys.SHOW_PHASE2_NOTIFICATION,
      true
    );

    const onUpdateCloseClick = () => {
      setShowUpdateNotificationBar(false);
    };

    return (
      <Fragment>
        <Header showNotification={showUpdateNotification} onCloseClick={onUpdateCloseClick} />
        <Box mt={8} className={showUpdateNotification ? classes.increaseTopSpace : null}>
          <Component {...props} />
        </Box>
        <SNETFooter data={FooterData} />
      </Fragment>
    );
  };
};

export default withLightHeaderAndFooter;
