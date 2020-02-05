import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(MUITheme => ({
  buttonsContainer: {
    marginTop: 40,
    marginBottom: 64,
    display: "flex",
    justifyContent: "center",
    "& button": {
      padding: " 13px 60px 11px",
    },
    [MUITheme.breakpoints.down("xs")]: { flexDirection: "column" },
  },
}));
