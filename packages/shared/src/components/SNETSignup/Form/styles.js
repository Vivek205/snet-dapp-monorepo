import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MuiTheme => ({
  signupForm: {
    boxSizing: "border-box",
    padding: "20px 20px 30px",
    borderRadius: 4,
    backgroundColor: MuiTheme.palette.text.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    "& button": { width: "100%" },
    "@media (max-width:960px)": {
      width: "95%",
      marginTop: 35,
    },
  },
  textField: {
    width: "100%",
    marginBottom: 0,
    display: "inline-block",
    "& div": { width: "100%" },
  },
  passwordCriteriaContainer: {
    color: MuiTheme.palette.text.mediumShadeGray,
    fontSize: 12,
    letterSpacing: 0.39,
    lineHeight: "16px",
    "& p": { display: "inline-block", paddingRight: 4 },
  },
}));
