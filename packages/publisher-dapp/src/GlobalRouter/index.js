import React, { Suspense } from "react";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "shared/dist/components/PageNotFound";
import { connect } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import PageNotFoundImage from "shared/dist/assets/images/pageNotFound.png";
import { setupRouteAuthentications } from "./Routes";
import { loginActions } from "../Services/Redux/actionCreators/userActions";
import PrivateRoute from "../Components/PrivateRoute";
import SNETStatusBanner from "shared/dist/components/SNETStatusBanner";
class GlobalRouter extends React.Component {
  componentDidMount() {
    this.props.initApp();
  }

  render() {
    if (this.props.error) {
      return (
        <SNETStatusBanner
          title="Unable to initialize application!"
          img={PageNotFoundImage}
          description="Unable to initialize the application. Please reload or contact support for help"
          actions={[
            { children: "reload", variant: "contained", color: "primary", onClick: () => window.location.reload() },
            {
              children: "contact support",
              variant: "contained",
              color: "primary",
              href: `mailto:${process.env.REACT_APP_SNET_SUPPORT_MAIL}`,
            },
          ]}
        />
      );
    }
    if (!this.props.isInitialized) {
      return <LinearProgress />;
    }
    const routes = setupRouteAuthentications();
    return (
      <ReactRouter>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route path="/" exact component={routes.OVERVIEW.component} />
            {Object.values(routes).map(route => {
              if (route.redirectTo) {
                return (
                  <PrivateRoute
                    key={route.name}
                    path={route.path}
                    component={route.component}
                    isAllowed={route.isAllowed}
                    redirectTo={route.redirectTo}
                  />
                );
              }
              return <Route key={route.name} path={route.path} component={route.component} />;
            })}
            <Route component={() => <PageNotFound homePath="/" />} />
          </Switch>
        </Suspense>
      </ReactRouter>
    );
  }
}
const mapStateToProps = state => ({
  isInitialized: state.user.isInitialized,
  isLoggedIn: state.user.isLoggedIn,
  isMMConnected: state.user.isMMConnected,
  error: state.error.app,
});
const mapDispatchToProps = dispatch => ({
  initApp: () => dispatch(loginActions.initializeApplication),
});
export default connect(mapStateToProps, mapDispatchToProps)(GlobalRouter);
