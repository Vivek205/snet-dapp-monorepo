import React from "react";
import { useSelector } from "react-redux";

import SNETHeader from "shared/dist/components/SNETHeader";
import LoggedInActions from "./LoggedInActions";
import LoggedOutActions from "./LoggedOutActions";

const Header = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  return (
    <SNETHeader
      isLoggedIn={isLoggedIn}
      color="default"
      navbar={{
        navbarItems: [
          { label: "Overview", type: "link", openInNewTab: false, activeLinks: ["/", "/overview"], to: "/overview" },
          { label: "How It Works", type: "link", openInNewTab: false, activeLinks: ["/enroll"], to: "/enroll" },
        ],
      }}
      LoggedInActions={LoggedInActions}
      LoggedOutActions={LoggedOutActions}
    />
  );
};

export default Header;
