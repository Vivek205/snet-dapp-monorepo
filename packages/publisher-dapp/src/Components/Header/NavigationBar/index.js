import React from "react";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";
import { useLocation, useParams, useHistory } from "react-router-dom";

import SNETList from "shared/dist/components/SNETList";
import StyledDropdown from "shared/dist/components/StyledDropdown";
import { useSelector, useDispatch } from "react-redux";

import { useStyles } from "./styles";
import NavbarLink from "./NavbarLink";
import { navbarItems } from "./constant";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";

const selectState = state => ({
  orgUuid: state.organization.uuid,
  serviceList: state.aiServiceList.data,
});

const NavigationBar = props => {
  const { headerColor } = props;
  const classes = useStyles(props);
  const history = useHistory();
  const location = useLocation();
  const { orgUuid, serviceList } = useSelector(selectState);
  const { serviceUuid } = useParams();
  const dispatch = useDispatch();

  const serviceDropdownChange = event => {
    const { value } = event.target;
    if (value === "default") {
      return;
    }
    dispatch(aiServiceDetailsActions.setServiceUuid(value));
    history.push(GlobalRoutes.AI_SERVICE_CREATION.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", value));
  };

  const serviceDropdownList = serviceList.map(service => ({ value: service.uuid, label: service.displayName }));

  if (location.pathname.match(GlobalRoutes.AI_SERVICE_CREATION.match)) {
    return (
      <nav>
        <SNETList display="inline" className={classes.navlist}>
          <div className={classes.serviceNameDropdown}>
            <StyledDropdown
              name="service_list_dropdown"
              labelTxt="select a service"
              value={serviceUuid}
              list={serviceDropdownList}
              onChange={serviceDropdownChange}
            />
          </div>
        </SNETList>
      </nav>
    );
  }

  return (
    <nav className={classes.navigationLinks}>
      <SNETList display="inline" className={classes.navlist}>
        {navbarItems.map(navbarItem => {
          if (navbarItem.type === "link") {
            return (
              <ListItem key={navbarItem.label} children={<NavbarLink {...navbarItem} headerColor={headerColor} />} />
            );
          }
          return null;
        })}
      </SNETList>
    </nav>
  );
};

NavigationBar.propTypes = {
  navbarItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      activeLinks: PropTypes.arrayOf(PropTypes.string),
      label: PropTypes.string,
      openInNewTab: PropTypes.bool,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    })
  ),
  headerColor: PropTypes.string,
};

export default NavigationBar;
