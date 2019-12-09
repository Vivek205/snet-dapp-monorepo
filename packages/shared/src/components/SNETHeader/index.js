import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";

import { useStyles } from "./styles";
import HeaderActions from "./HeaderActions";
import Navbar from "./Navbar";
import SNETAppBar from "../SNETAppBar";
import Logo from "./Logo";

const SNETHeader = ({ isLoggedIn, color, navbar, actions }) => {
  const classes = useStyles();
  return (
    <SNETAppBar position="fixed" color={color}>
      <Toolbar>
        <Container className={classes.logoContainer}>
          <Logo headerColor={color} />
        </Container>
        <Container className={classes.navContainer}>
          <Navbar {...navbar} headerColor={color}/>
        </Container>
        <Container className={classes.actionsContainer}>
          <HeaderActions actions={actions} isLoggedIn={isLoggedIn} headerColor={color} />
        </Container>
      </Toolbar>
    </SNETAppBar>
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
    { children: "login", color: "primary", onClick: () => console.log("clicked"), component: "a" },
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
        to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      })
    ),
  }),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
      variant: PropTypes.string,
      handler: PropTypes.func,
    })
  ),
};

export default SNETHeader;
