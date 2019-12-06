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

const Header = ({ isLoggedIn, color, navbar, actions }) => {
  const classes = useStyles();
  return (
    <div>
      <header>
        <AppBar position="fixed" color="default">
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
      </header>
    </div>
  );
};

Header.defaultProps = {
  color: "white",
  navbar: {
    navbarItems: [
      { label: "Overview", type: "link", openInNewTab: false, activeLinks: ["/", "/overview"], to: "/" },
      { label: "How It Works", type: "link", openInNewTab: true, activeLinks: ["/enroll"], to: "/" },
    ],
  },
  actions: [
    { children: "login", color: "primary", onClick: () => console.log("clicked") },
    { children: "enroll", color: "primary", onClick: () => console.log("clicked"), variant: "contained" },
  ],
};

Header.propTypes = {
  color: PropTypes.string,
  navbar: PropTypes.shape({
    navbarItems: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        activeLinks: PropTypes.arrayOf(PropTypes.string),
        label: PropTypes.string,
        openInNewTab: PropTypes.bool,
        to: PropTypes.oneOf(PropTypes.string, PropTypes.object),
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

export default Header;
