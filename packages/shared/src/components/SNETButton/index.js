import MuiButton from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const SNETButton = withStyles(MUITheme => ({
  root: props => {
    const rootStyles = {
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: 1.25,
      padding: "13px 28px 11px",
      lineHeight: "16px",
    };
    if (props.color === "purple" && props.variant === "contained-inverted") {
      rootStyles.color = MUITheme.palette.text.white;
      rootStyles.backgroundColor = MUITheme.palette.purple.main;
      rootStyles.border = "1px solid";
      rootStyles["&:hover"] = {
        backgroundColor: MUITheme.palette.purple.light,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": { backgroundColor: MUITheme.palette.purple.main },
      };
    }
    if (props.color === "white" && props.variant === "text") {
      rootStyles.color = MUITheme.palette.primary.main;
      rootStyles.backgroundColor = MUITheme.palette.background.white;
      rootStyles.boxShadow = "0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24)";
    }
    if (props.color === "red") {
      rootStyles.color = MUITheme.palette.text.red;
    }
    return rootStyles;
  },
  containedSecondary: { color: MUITheme.palette.text.white },
}))(MuiButton);

export default SNETButton;
