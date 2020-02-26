import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  navigationLinks: { marginLeft: 170 },
  navlist: {
    padding: 0,
    margin: 0,
    display: "flex",
    "& li": {
      width: "auto",
      padding: 0,
      marginRight: 25,
    },
  },
  navLink: {
    textDecoration: "none",
    color: MUITheme.palette.text.lightGrey,
  },
  navLinkActive: {
    borderBottom: `2px solid ${MUITheme.palette.primary.main}`,
    paddingBottom: 3,
    color: MUITheme.palette.primary.main,
    fontWeight: 600,
    "&: visited": {
      borderBottom: `2px solid ${MUITheme.palette.primary.main}`,
      paddingBottom: 3,
      color: MUITheme.palette.primary.main,
      fontWeight: 600,
    },
  },
  serviceNameDropdown: {
    marginLeft: 24,
    "& > div": {
      width: "auto",
      paddingLeft: 9,
    },
    "& fieldset": { border: "none" },
    "& svg": { right: -20 },
    "&::before": {
      content: '" "',
      width: 1,
      height: 36,
      display: "inline-block",
      background: "rgba(155,155,155,0.4)",
      position: "absolute",
      top: 15,
    },
    "& .MuiSelect-selectMenu": {
      color: MUITheme.palette.text.lightGrey,
      fontSize: 20,
    },
  },
  headerDropDown: {
    "& > div": {
      display: "flex",
      alignItems: "flex-start",
    },
    "& button": {
      padding: 0,
      "& span": {
        color: MUITheme.palette.text.lightGrey,
        fontSize: 16,
        "&:hover": { color: MUITheme.palette.primary.main },
      },
    },
    "& svg": {
      paddingTop: 2,
      color: MUITheme.palette.text.lightGrey,
      "&:hover": { color: MUITheme.palette.primary.main },
    },
  },
}));
