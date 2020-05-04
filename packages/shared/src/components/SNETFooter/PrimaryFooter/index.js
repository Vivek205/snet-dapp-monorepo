import React from "react";
import { withStyles } from "@material-ui/styles";

import FooterLinks from "./FooterLinks";
import { useStyles } from "./styles";
import FooterLink from "../FooterLink";
import FooterLogo from "./FooterLogo";

const PrimaryFooter = ({ classes, leftData, mainData }) => {
  return (
    <div className={classes.PrimaryFooter}>
      <div className={classes.LeftData}>
        <FooterLogo />
        <ul className={classes.footerLogoSection}>
          {leftData.map(item => (
            <FooterLink
              key={item.label}
              image={item.image}
              link={item.link}
              label={item.label}
              internalLink={item.internalLink}
            />
          ))}
        </ul>
      </div>
      <FooterLinks data={mainData} />
    </div>
  );
};

export default withStyles(useStyles)(PrimaryFooter);
