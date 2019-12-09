import MuiButton from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const SNETButton = withStyles(MuiTheme => ({
  root: props => {
    const rootStyles = { fontWeight: 600, letterSpacing: 1.25, padding: "13px 28px 11px", lineHeight: "16px" };
    if (props.color === "purple" && props.variant === "contained") {
      rootStyles.color = MuiTheme.palette.text.secondary;
      rootStyles.backgroundColor = MuiTheme.palette.purple.main;
      rootStyles.border = "1px solid";
      rootStyles["&:hover"] = {
        backgroundColor: MuiTheme.palette.purple.light,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": { backgroundColor: MuiTheme.palette.purple.main },
      };
    }

    return rootStyles;
  },
  containedSecondary: { color: MuiTheme.palette.text.secondary },
}))(MuiButton);

export default SNETButton;
