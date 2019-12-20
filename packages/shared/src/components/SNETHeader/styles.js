import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  logoContainer: {
    flexGrow: 1,
    "& img": {
      width: 172,
    },
  },
  navContainer: {
    flexGrow: 1,
  },
  actionsContainer: {
    flexGrow: 1,
    "& *": {
      marginLeft: 5,
    },
    textAlign: "end",
  },
}));
