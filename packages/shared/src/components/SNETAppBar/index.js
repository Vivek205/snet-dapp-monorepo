import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";

const SNETAppBar = withStyles(MuiTheme => ({
  root: props => {
    const rootStyles = {};
    if (props.color === "white") {
      rootStyles.backgroundColor = MuiTheme.palette.background.white;
    }
    return rootStyles;
  },
}))(AppBar);

export default SNETAppBar;
