import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SnetSvgLogo from "../../assets/images/BlackLogo.svg";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";

import { useStyles } from "./styles";
import HeaderActions from "./HeaderActions";
import Navbar from "./Navbar";

const SNETHeader = ({ isLoggedIn, color, navbar, actions }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color={color}>
      <Toolbar>
        <Container className={classes.logoContainer}>
          <CardMedia component="img" image={SnetSvgLogo} alt="SingularityNET" />
        </Container>
        <Container className={classes.navContainer}>
          <Navbar {...navbar} />
        </Container>
        <Container className={classes.actionsContainer}>
          <HeaderActions actions={actions} isLoggedIn={isLoggedIn} />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

SNETHeader.defaultProps = {
  color: "white",
  navbar: {
    navbarItems: [
      { label: "Overview", type: "link", openInNewTab: false, activeLinks: ["/", "/overview"], to: "/overview" },
      { label: "How It Works", type: "link", openInNewTab: false, activeLinks: ["/enroll"], to: "/enroll" },
    ],
  },
  actions: [
    { children: "login", color: "primary", onClick: () => console.log("clicked") },
    { children: "enroll", color: "primary", onClick: () => console.log("clicked"), variant: "contained" },
  ],
};

SNETHeader.propTypes = {
  color: PropTypes.string,
  navbar: PropTypes.shape({
    navbarItems: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        activeLinks: PropTypes.arrayOf(PropTypes.string),
        label: PropTypes.string,
        openInNewTab: PropTypes.bool,
        to: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
      })
    ),
  }),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
      vaiant: PropTypes.string,
      handler: PropTypes.func,
    })
  ),
};

export default SNETHeader;
