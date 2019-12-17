import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(MuiTheme => ({
  basicTextFieldGrid: {
    padding: "0 15px",
  },
  buttonsContainer: {
    marginTop: 10,
    display: "flex",
    "& button": {
      padding: " 13px 60px 11px",
      marginTop: 10,
      "&:first-of-type": {
        marginRight: 10,
      },
    },
  },
}));
