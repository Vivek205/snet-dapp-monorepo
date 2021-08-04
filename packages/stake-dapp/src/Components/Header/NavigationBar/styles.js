import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  navigationLinks: {
    paddingTop: 10,
    marginLeft: 90,
    "@media(max-width:1095px)": { marginLeft: 20 },
  },
  navlist: {
    padding: 0,
    margin: 0,
    display: "flex",
    "& li": {
      width: "auto",
      padding: 0,
      marginRight: 25,
      "@media(max-width:1280px)": { marginRight: 20 },
    },
  },
  navLink: {
    paddingBottom: 8,
    textDecoration: "none",
    color: MUITheme.palette.text.lightGrey,
    fontFamily: MUITheme.typography.fontFamily,
    "&:hover": { color: MUITheme.palette.text.white },
  },
  navLinkActive: {
    borderBottom: `1.5px solid ${MUITheme.palette.text.white}`,
    paddingBottom: 7,
    color: MUITheme.palette.text.white,
    "&: visited": {
      borderBottom: `2px solid ${MUITheme.palette.primary.main}`,
      paddingBottom: 3,
      color: MUITheme.palette.primary.main,
      fontWeight: 600,
    },
  },
  headerDropDown: {
    "& > div": {
      display: "flex",
      alignItems: "flex-start",
      "&:hover": {
        "& button": {
          "& span": { color: MUITheme.palette.text.white },
        },
        "& svg": { color: MUITheme.palette.text.white },
      },
    },
    "& button": {
      padding: 0,
      "& span": {
        paddingBottom: 8,
        color: MUITheme.palette.text.lightGrey,
        fontSize: 16,
      },
    },
    "& svg": {
      paddingTop: 2,
      color: MUITheme.palette.text.lightGrey,
    },
  },
}));
