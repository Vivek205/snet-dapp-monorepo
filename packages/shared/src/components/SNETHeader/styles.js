import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  appBar: {
    padding: "14px 60px",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "0 2px 6px 0 rgba(0,0,0,0.2)",
    zIndex: 1110,
    [MUITheme.breakpoints.down("md")]: { padding: "14px 10px" },
    [MUITheme.breakpoints.down("sm")]: { justifyContent: "space-between" },
  },
  purple: {
    "& h5": { color: `${MUITheme.palette.text.white} !important` },
  },
  logoContainer: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "& img": { width: 172 },
    "& h5": {
      marginLeft: 11,
      fontWeight: 300,
      lineHeight: "30px",
    },
    [MUITheme.breakpoints.down("md")]: { padding: 0 },
  },
  navContainer: {
    flexGrow: 1,
    [MUITheme.breakpoints.down("md")]: { padding: 0 },
    [MUITheme.breakpoints.down("sm")]: { display: "none" },
  },
  headerActionsContainer: {
    "@media(max-width:642px)": { display: "none" },
  },
}));
