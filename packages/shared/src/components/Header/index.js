import React from "react";
// import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SnetSvgLogo from "../../assets/images/BlackLogo.svg";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import SNETButton from "../SNETButton";

import { useStyles } from "./styles";
// import NavBar from "./NavBar";
// import HeaderActions from "./HeaderActions";
// import Title from "./Title";
// import MobileHeader from "./MobileHeader";
// import { NavData } from "../../../utility/constants/Header";

const Header = ({ isLoggedIn }) => {
  const classes = useStyles();
  return (
    <div>
      {/* <header className={classes.header}> */}
      <header>
        <AppBar position="fixed" color="error">
          <Toolbar>
            {/* <img src={SnetSvgLogo} alt="SingularityNET"  className={classes.logo}/> */}
            <Container className={classes.logoContainer}>
              <CardMedia component="img" image={SnetSvgLogo} alt="SingularityNET" />
            </Container>
            <Container className={classes.navContainer}>menus</Container>
            <Container className={classes.actionsContainer}>
              <SNETButton color="primary" children="login" />
              <SNETButton color="primary" children="enroll" variant="contained" />
            </Container>
          </Toolbar>
        </AppBar>
        {/* <div className={classes.logoSection}>
          <MobileHeader data={NavData} isLoggedIn={isLoggedIn} />
          <Title />
        </div>
        <div className={classes.navigationSection}>
          <NavBar data={NavData} />
        </div>
        <div className={classes.loginBtnsSection}>
          <HeaderActions isLoggedIn={isLoggedIn} />
        </div> */}
      </header>
    </div>
  );
};

// const mapStateToProps = state => ({ isLoggedIn: state.userReducer.login.isLoggedIn });

// export default connect(mapStateToProps)(Header);
export default Header;
