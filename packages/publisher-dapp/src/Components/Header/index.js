import React from "react";
import SNETHeader from "shared/dist/components/SNETHeader";
import { useHistory } from "react-router-dom";
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const Header = () => {
  const history = useHistory();

  const headerProps = {
    color: "white",
    navbar: {
      navbarItems: [
        { label: "Overview", type: "link", openInNewTab: false, activeLinks: ["/", "/overview"], to: "/overview" },
        { label: "How It Works", type: "link", openInNewTab: false, activeLinks: ["/enroll"], to: "/enroll" },
      ],
    },
    actions: [
      {
        children: "login",
        color: "primary",
        onClick: () => history.push(`${GlobalRoutes.ONBOARDING.basePath}/entity`),
      },
      { children: "enroll", color: "primary", onClick: () => console.log("clicked"), variant: "contained" },
    ],
  };

  return <SNETHeader {...headerProps} />;
};

export default Header;
