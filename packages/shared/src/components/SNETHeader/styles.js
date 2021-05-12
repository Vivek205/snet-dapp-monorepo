import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  snetHeader: {
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 1100,
  },
  purpleHeader: { backgroundColor: "rgb(34, 13, 58)" },
  appBar: {
    padding: "14px 60px",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "0 2px 6px 0 rgba(0,0,0,0.2)",
    zIndex: 1110,
    [MUITheme.breakpoints.down("md")]: { padding: "14px 10px" },
    "@media(max-width:1028px)": { justifyContent: "space-between" },
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
      letterSpacing: -1,
      lineHeight: "30px",
      "@media(max-width:420px)": { display: "none" },
    },
    [MUITheme.breakpoints.down("md")]: { padding: 0 },
  },
  navContainer: {
    flexGrow: 1,
    "@media(max-width:1028px)": { display: "none" },
    [MUITheme.breakpoints.down("md")]: { padding: 0 },
  },
  headerActionsContainer: {
    "@media(max-width:720px)": { display: "none" },
  },
}));
