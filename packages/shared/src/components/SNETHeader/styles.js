import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  logoContainer: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    "& img": { width: 172 },
    "& h5": {
      marginLeft: 8,
      fontWeight: 300,
      lineHeight: "30px",
    },
    [MUITheme.breakpoints.down("md")]: { padding: 0 },
  },
  navContainer: {
    flexGrow: 1,
    [MUITheme.breakpoints.down("md")]: { padding: 0 },
  },
}));
