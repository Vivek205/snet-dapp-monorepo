import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& hr": {
      marginTop: 10,
      background: "rgba(155,155,155,0.4)",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: { padding: "9px 40px" },
  hide: { display: "none" },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: 193,
    top: 65,
    background: "#220D3A",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: 60,
    top: 65,
    background: "#220D3A",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    "& ul": {
      "& span": { display: "none" },
    },
  },
  toolbar: {
    textAlign: "right",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  list: { padding: 0 },
  listItem: {
    padding: "12px 16px",
    "& span": {
      color: "#9b9b9b",
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: 0.25,
    },
    "&:hover": {
      background: "rgba(64,134,255,0.25)",
      "& svg": { color: "#fff" },
      "& span": { color: "#fff" },
    },
  },
  listItemIcon: { color: "#9b9b9b" },
  chevronIcon: { color: "#fff" },
}));
