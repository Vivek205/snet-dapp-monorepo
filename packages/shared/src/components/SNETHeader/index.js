import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CardMedia from "@material-ui/core/CardMedia";

import SnetSvgLogo from "../../assets/images/BlackLogo.svg";
import { useStyles } from "./styles";
import HeaderActions from "./HeaderActions";
import Navbar from "./Navbar";

const SNETHeader = ({ isLoggedIn, color, navbar, LoggedInActions, LoggedOutActions, portalName }) => {
  const classes = useStyles();
  return (
    <div>
      <header>
        <AppBar position="fixed" color={color}>
          <Toolbar>
            <Container className={classes.logoContainer}>
              <CardMedia component="img" image={SnetSvgLogo} alt="SingularityNET" />
              <span className={classes.portalName}>{portalName}</span>
            </Container>
            <Container className={classes.navContainer}>
              <Navbar {...navbar} />
            </Container>
            <Container className={classes.actionsContainer}>
              <HeaderActions
                isLoggedIn={isLoggedIn}
                LoggedInActions={LoggedInActions}
                LoggedOutActions={LoggedOutActions}
              />
            </Container>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
};

SNETHeader.propTypes = {
  isLoggedIn: PropTypes.bool,
  color: PropTypes.string,
  navbar: PropTypes.shape({
    navbarItems: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        activeLinks: PropTypes.arrayOf(PropTypes.string),
        label: PropTypes.string,
        openInNewTab: PropTypes.bool,
        to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      })
    ),
  }),

  LoggedInActions: PropTypes.elementType,
  LoggedOutActions: PropTypes.elementType,
};

export default SNETHeader;
