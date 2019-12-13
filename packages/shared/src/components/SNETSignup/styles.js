import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MuiTheme => ({
  signupInfo: {
    paddingRight: 54,
    "@media (max-width:960px)": { paddingRight: 0 },
    "& h2": {
      margin: 0,
      color: MuiTheme.palette.text.darkShadedGray,
      fontSize: 32,
      letterSpacing: -0.5,
      lineHeight: "48px",
      fontWeight: 600,
    },
    "& p": {
      margin: "23px 0 24px",
      color: MuiTheme.palette.text.mediumShadeGray,
      fontSize: 20,
      lineHeight: "30px",
    },
    "& ul": {
      margin: 0,
      padding: 0,
    },

    "& li": {
      marginBottom: 15,
      display: "flex",
      alignItems: "baseline",
      listStyle: "none",
      "& span": {
        marginRight: 15,
        color: MuiTheme.palette.text.green,
        fontSize: 20,
      },
      "& p": {
        color: MuiTheme.palette.text.mediumShadeGray,
        fontSize: 16,
        letterSpacing: "0.29px",
        display: "inline-block",
        margin: 0,
        width: "84%",
        verticalAlign: "top",
      },
    },
  },
}));
