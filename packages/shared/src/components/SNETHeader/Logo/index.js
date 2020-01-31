import React from "react";
import PropTypes from "prop-types";
import CardMedia from "@material-ui/core/CardMedia";

import SnetBlackLogo from "../../../assets/images/BlackLogo.svg";
import SnetWhiteLogo from "../../../assets/images/WhiteLogo.svg";

const SnetSvgLogo = {
  white: SnetBlackLogo,
  purple: SnetWhiteLogo,
};

const Logo = ({ headerColor }) => {
  return <CardMedia component="img" image={SnetSvgLogo[headerColor]} alt="SingularityNET" />;
};

Logo.propTypes = {
  headerColor: PropTypes.string,
};

export default Logo;
